function initializeDocumentationInteractions(onSignOut) {
  const disposers = [];
  const timers = new Set();
  const frames = new Set();
  let disposed = false;

  function listen(target, type, handler, options) {
    if (!target) return;
    target.addEventListener(type, handler, options);
    disposers.push(() => target.removeEventListener(type, handler, options));
  }

  function requestFrame(callback) {
    const id = window.requestAnimationFrame((time) => {
      frames.delete(id);
      if (!disposed) callback(time);
    });
    frames.add(id);
    return id;
  }

  function later(callback, delay) {
    const id = window.setTimeout(() => {
      timers.delete(id);
      if (!disposed) callback();
    }, delay);
    timers.add(id);
    return id;
  }

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch {
      return null;
    }
  }

  const root = document.documentElement;
  const themeButton = document.querySelector("#themeBtn");
  if (typeof onSignOut === "function") {
    listen(document.querySelector("#logoutBtn"), "click", onSignOut);
  }
  const nextTheme = () => (root.getAttribute("data-theme") === "dark" ? "light" : "dark");

  listen(themeButton, "click", () => {
    const theme = nextTheme();
    root.setAttribute("data-theme", theme);
    store("mazad-docs-theme", theme);
  });

  const savedTheme = store("mazad-docs-theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);

  listen(document.querySelector("#menuBtn"), "click", () => {
    document.body.classList.toggle("nav-open");
  });
  listen(document.querySelector(".scrim"), "click", () => {
    document.body.classList.remove("nav-open");
  });
  document.querySelectorAll(".nav a").forEach((link) => {
    listen(link, "click", () => document.body.classList.remove("nav-open"));
  });

  const progressBar = document.querySelector("#progress");
  const toTopButton = document.querySelector("#toTop");
  let progressQueued = false;

  function updateProgress() {
    const html = document.documentElement;
    const maxScroll = html.scrollHeight - html.clientHeight;
    if (progressBar) {
      progressBar.style.transform =
        "scaleX(" + (maxScroll > 0 ? html.scrollTop / maxScroll : 0) + ")";
    }
    toTopButton?.classList.toggle("show", html.scrollTop > 700);
    progressQueued = false;
  }

  function queueProgress() {
    if (!progressQueued) {
      progressQueued = true;
      requestFrame(updateProgress);
    }
  }

  listen(window, "scroll", queueProgress, { passive: true });
  listen(toTopButton, "click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  updateProgress();

  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  let revealObserver;
  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("in"));
  }

  document.querySelectorAll("[data-count]").forEach((element) => {
    const target = Number(element.getAttribute("data-count"));
    let start = null;

    function countUp(time) {
      if (start === null) start = time;
      const progress = Math.min((time - start) / 900, 1);
      element.textContent = String(
        Math.round(target * (1 - Math.pow(1 - progress, 3))),
      );
      if (progress < 1) requestFrame(countUp);
    }

    requestFrame(countUp);
  });

  const links = Object.create(null);
  document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
    links[link.getAttribute("href").slice(1)] = link;
  });

  const spyTargets = Array.from(document.querySelectorAll("[data-spy]")).filter(
    (element) => links[element.getAttribute("data-spy")],
  );
  let current = null;

  function setActive(id) {
    if (!links[id] || id === current) return;
    if (current && links[current]) links[current].classList.remove("active");
    links[id].classList.add("active");
    current = id;

    const sidebar = document.querySelector(".sidebar");
    const activeLink = links[id];
    if (!sidebar || !activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const sidebarRect = sidebar.getBoundingClientRect();
    if (linkRect.top < sidebarRect.top + 60 || linkRect.bottom > sidebarRect.bottom - 60) {
      sidebar.scrollTo({
        top: sidebar.scrollTop + linkRect.top - sidebarRect.top - sidebarRect.height / 2,
        behavior: "smooth",
      });
    }
  }

  function updateActiveSection() {
    const threshold = 136;
    let best = null;
    spyTargets.forEach((element) => {
      if (element.getBoundingClientRect().top <= threshold) best = element;
    });
    if (!best) best = spyTargets[0];
    if (best) setActive(best.getAttribute("data-spy"));
  }

  let spyQueued = false;
  function queueSpy() {
    if (!spyQueued) {
      spyQueued = true;
      requestFrame(() => {
        spyQueued = false;
        updateActiveSection();
      });
    }
  }

  listen(window, "scroll", queueSpy, { passive: true });
  listen(window, "hashchange", updateActiveSection);
  updateActiveSection();

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        if (!document.execCommand("copy")) throw new Error("Copy failed");
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        textarea.remove();
      }
    });
  }

  function handleCopy(event) {
    const button = event.target.closest(".copy");
    if (!button) return;

    let text = button.getAttribute("data-copy");
    if (text == null) {
      const codeBlock = button.closest(".code");
      text = codeBlock
        ? (codeBlock.querySelector("code")?.innerText || "").replace(/\u200b/g, "")
        : "";
    }

    copyText(text)
      .then(() => {
        const label = button.querySelector(".lbl");
        if (!label) return;
        const original = label.textContent;
        button.classList.add("done");
        label.textContent = "Copied";
        later(() => {
          button.classList.remove("done");
          label.textContent = original;
        }, 1600);
      })
      .catch(() => {});
  }

  listen(document, "click", handleCopy);

  function flash(element) {
    element.classList.remove("flash");
    void element.offsetWidth;
    element.classList.add("flash");
  }

  function flashHashTarget() {
    const element = document.getElementById(window.location.hash.slice(1));
    if (element) flash(element.closest(".chunk") || element);
  }

  listen(window, "hashchange", flashHashTarget);

  const modal = document.querySelector("#searchModal");
  const searchInput = document.querySelector("#sInput");
  const resultsBox = document.querySelector("#results");
  let selected = 0;
  let currentResults = [];

  const searchIndex = Array.from(document.querySelectorAll(".chunk[data-title]")).map(
    (element) => ({
      id: element.id,
      title: element.getAttribute("data-title"),
      group: element.getAttribute("data-group") || "",
      method: element.getAttribute("data-method") || "",
      text: element.innerText.replace(/\s+/g, " ").trim(),
      low: "",
      element,
    }),
  );

  searchIndex.forEach((item) => {
    item.low = (item.title + " " + item.group + " " + item.text).toLowerCase();
  });

  function escapeHtml(text) {
    return text.replace(/[&<>"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    })[character]);
  }

  function escapeRegex(text) {
    const special = "\\^$.*+?()[]{}|";
    return text.split("").map((character) =>
      special.includes(character) ? "\\" + character : character,
    ).join("");
  }

  function highlight(html, terms) {
    terms.forEach((term) => {
      if (!term) return;
      const expression = new RegExp(
        "(" + escapeRegex(term) + ")(?![^<]*>)",
        "gi",
      );
      html = html.replace(expression, "<mark>$1</mark>");
    });
    return html;
  }

  function makeSnippet(item, terms) {
    const lower = item.text.toLowerCase();
    let position = -1;

    terms.forEach((term) => {
      const found = lower.indexOf(term);
      if (found > -1 && (position < 0 || found < position)) position = found;
    });

    if (position < 0) position = 0;
    const start = Math.max(0, position - 50);
    const end = Math.min(item.text.length, position + 130);
    const snippet =
      (start > 0 ? "…" : "") +
      item.text.slice(start, end) +
      (end < item.text.length ? "…" : "");
    return highlight(escapeHtml(snippet), terms);
  }

  function search(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      return searchIndex.slice(0, 8).map((item) => ({ item, score: 0 }));
    }

    const output = [];
    searchIndex.forEach((item) => {
      let score = 0;
      let matches = true;

      terms.forEach((term) => {
        if (!item.low.includes(term)) {
          matches = false;
          return;
        }
        if (item.title.toLowerCase().includes(term)) score += 10;
        if (item.group.toLowerCase().includes(term)) score += 3;
        score += Math.min(5, item.low.split(term).length - 1);
      });

      if (matches) output.push({ item, score });
    });

    return output
      .sort((left, right) => right.score - left.score)
      .slice(0, 12);
  }

  function renderResults() {
    const query = searchInput.value.trim();
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    currentResults = search(query);
    selected = 0;

    if (!currentResults.length) {
      resultsBox.innerHTML =
        '<div class="empty">No results for “' +
        escapeHtml(query) +
        "”.<br><small>Try a field name like <code>invoice_id</code> or a topic like “credit note”.</small></div>";
      return;
    }

    resultsBox.innerHTML =
      (query
        ? ""
        : '<div class="rg" style="padding:6px 14px;font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--faint)">JUMP TO</div>') +
      currentResults
        .map((result, index) => {
          const item = result.item;
          return (
            '<a class="res' +
            (index === 0 ? " sel" : "") +
            '" data-i="' +
            index +
            '" href="#' +
            item.id +
            '" style="animation-delay:' +
            index * 25 +
            'ms"><div class="rg">' +
            escapeHtml(item.group) +
            '</div><div class="rt">' +
            (item.method
              ? '<span class="m ' +
                escapeHtml(item.method) +
                '" style="font:700 9.5px var(--mono);padding:3px 5px;border-radius:5px">' +
                escapeHtml(item.method) +
                "</span>"
              : "") +
            highlight(escapeHtml(item.title), terms) +
            "</div>" +
            (query ? '<div class="rs">' + makeSnippet(item, terms) + "</div>" : "") +
            "</a>"
          );
        })
        .join("");
  }

  function openSearch() {
    modal.classList.add("open");
    searchInput.value = "";
    renderResults();
    later(() => searchInput.focus(), 40);
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function goToResult(index) {
    const result = currentResults[index];
    if (!result) return;

    closeSearch();
    result.item.element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#" + result.item.id);
    flash(result.item.element);
  }

  function moveSelection(amount) {
    const items = Array.from(resultsBox.querySelectorAll(".res"));
    if (!items.length) return;
    items[selected].classList.remove("sel");
    selected = (selected + amount + items.length) % items.length;
    items[selected].classList.add("sel");
    items[selected].scrollIntoView({ block: "nearest" });
  }

  listen(document.querySelector("#searchBtn"), "click", openSearch);
  listen(modal, "mousedown", (event) => {
    if (event.target === modal) closeSearch();
  });
  listen(searchInput, "input", renderResults);
  listen(resultsBox, "click", (event) => {
    const result = event.target.closest(".res");
    if (!result) return;
    event.preventDefault();
    goToResult(Number(result.getAttribute("data-i")));
  });
  listen(resultsBox, "mousemove", (event) => {
    const result = event.target.closest(".res");
    if (!result) return;
    const index = Number(result.getAttribute("data-i"));
    if (index === selected) return;
    const items = Array.from(resultsBox.querySelectorAll(".res"));
    items[selected]?.classList.remove("sel");
    selected = index;
    items[selected]?.classList.add("sel");
  });

  function handleSearchKeys(event) {
    const isOpen = modal.classList.contains("open");
    if ((event.key === "k" || event.key === "K") && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      isOpen ? closeSearch() : openSearch();
      return;
    }

    if (
      event.key === "/" &&
      !isOpen &&
      !/INPUT|TEXTAREA/.test(document.activeElement.tagName)
    ) {
      event.preventDefault();
      openSearch();
      return;
    }

    if (!isOpen) return;
    if (event.key === "Escape") closeSearch();
    else if (event.key === "ArrowDown") {
      event.preventDefault();
      moveSelection(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveSelection(-1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      goToResult(selected);
    }
  }

  listen(document, "keydown", handleSearchKeys);

  if (/Mac|iPhone|iPad/.test(navigator.platform || "")) {
    document.querySelectorAll(".mod-key").forEach((key) => {
      key.textContent = "⌘";
    });
  }

  return () => {
    disposed = true;
    disposers.forEach((dispose) => dispose());
    revealObserver?.disconnect();
    timers.forEach((id) => window.clearTimeout(id));
    frames.forEach((id) => window.cancelAnimationFrame(id));
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  };
}

export { initializeDocumentationInteractions };
