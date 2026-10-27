const COPY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>`;
const INFO_ICON = `<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>`;
const WARN_ICON = `<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg>`;
const OK_ICON = `<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><path d="m22 4-10 10-3-3" /></svg>`;
const CAP_M = `style="font: 700 9.5px var(--mono); padding: 3px 5px; border-radius: 5px;"`;
const ORG_ID = "941299173";
const CLIENT_ID = "1000.DJQKYV6HZY3O2CLIFWAVONZPMWXSGT";
const CLIENT_SECRET = "1178ef3e182949b60be66fe7b0fb8630ec3d71888c";
const REFRESH_TOKEN =
  "1000.c8d8b7ecd2580a83812f260435f79ff7.62b9416c3d0f726917e2608913f05e66";
const REDIRECT_URI = "http://www.zoho.com/books";
const WEBHOOK_BASE =
  "https://www.zohoapis.com/books/v3/settings/incomingwebhooks";
const WH_CREATE_INVOICE = {
  name: "iw__sb_941299173_create_inovoice",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x1%2B9u09VWkByoy%2FFDaQ4MMxg5ikmFmEKdw9TTjjf6hN3GxVJyYPRg%3D",
};
const WH_CREATE_PAYMENT = {
  name: "iw__sb_941299173_creating_payment",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x17P6O80WkByoy%2FFDaQ4MMxg5ikmFmEKdw9TTjjfKQOUCuQ4qcOxPz",
};
const WH_INVOICE_LINK = {
  name: "iw__sb_941299173_get_invoice_view_link",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x13My11GCkByoy%2FFDaQ4MMxg5ikmFmEKd04iXdkPWIMXa9R6yHNxjwiNK1A3o%3D",
};
const WH_CREATE_DEPOSIT = {
  name: "iw__sb_941299173_create_deposits",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x19%2FmUy1WkByoy%2FFDaQ4MMxg5ikmFmEKdw9TTjjf6hOnquTYCYKg4%3D",
};
const WH_REFUND = {
  name: "iw__sb_941299173_refund_amount",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x1w96k62SkByoy%2FFDaQ4MMxg5ikmFmEKdh4jf3l%2F%2BhP3KxV52F",
};
const WH_APPLY_CREDIT = {
  name: "iw__sb_941299173_apply_credit_to_invoice",
  key: "wSsVR60grkXzB64oz2CuILtqzA5dA1nyFER%2BilfwvyCpSvyTocc%2BnkfKVgWuFPcfFDFrFzsSrel8mhlV1GFa2Yl4mFECDSiF9mqRe1U4J3x19%2FmK1nykByoy%2FFDaQ4MMxg5ikmFmEKdy9yHugMSdLHq6S4euKhLYvtCqAngrlA%3D%3D",
};

const copyBtn = (value, label = "Copy URL", aria = "Copy URL") =>
  `<button class="copy" type="button" data-copy="${value}" aria-label="${aria}">${COPY_ICON}<span class="lbl">${label}</span></button>`;

const credCard = (title, hint, value, secret = false) => `
  <div class="cred card reveal${secret ? " secret" : ""}">
    <div class="lab"><b>${title}</b><small>${hint}</small></div>
    <div class="val">${value}</div>
    <button class="copy light" type="button" data-copy="${value}" aria-label="Copy ${title}">${COPY_ICON}<span class="lbl">Copy</span></button>
  </div>`;

const webhookUrlBox = (method, wh) => `
  <div class="url-box reveal">
    <div class="url-top"><span class="method ${method}">${method}</span><span class="grow">Endpoint URL</span>${copyBtn(`${WEBHOOK_BASE}/${wh.name}/execute?auth_type=apikey&amp;encapiKey=${wh.key}`)}</div>
    <div class="url"><span class="base">${WEBHOOK_BASE}/${wh.name}/execute</span><span class="q">?</span><span class="pr"><span class="k">auth_type</span><span class="q">=</span><span class="v">apikey</span><span class="q">&amp;</span></span><span class="pr"><span class="k">encapiKey</span><span class="q">=</span><span class="v">${wh.key}</span></span></div>
  </div>`;

const codeBlock = (title, badge, json) => {
  const badgeClass = badge === "REQUEST" ? "badge-req" : "badge-ok";
  const badgeText = badge === "REQUEST" ? "JSON · REQUEST" : "JSON · SUCCESS";
  return `
  <div class="code reveal">
    <div class="code-top"><div class="dots"><i></i><i></i><i></i></div><span class="code-title">${title}</span><span class="${badgeClass}">${badgeText}</span><button class="copy" type="button" aria-label="Copy code">${COPY_ICON}<span class="lbl">Copy</span></button></div>
    <pre><code>${highlightJson(json)}</code></pre>
  </div>`;
};

// Turns a pretty-printed JSON string into the highlighted line spans used by the page.
function highlightJson(src) {
  const esc = (s) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  return src
    .split("\n")
    .map((line) => {
      const out = line.replace(
        /("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?)|([{}[\],:])/g,
        (_match, str, colon, num, punct) => {
          if (str && colon)
            return `<span class="j-k">${esc(str)}</span><span class="j-p">:</span>`;
          if (str) return `<span class="j-s">${esc(str)}</span>`;
          if (num) return `<span class="j-n">${num}</span>`;
          return `<span class="j-p">${punct}</span>`;
        },
      );
      return `<span class="ln">${out}</span>`;
    })
    .join("");
}

const paramTable = (head, rows) => `
  <div class="tbl-wrap reveal"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
const pRow = (name, required, desc, child = false) =>
  `<tr${child ? ' class="child"' : ""}><td class="param"><code>${name}</code></td><td><span class="req ${required ? "yes" : "opt"}">${required ? "Required" : "Optional"}</span></td><td>${desc}</td></tr>`;
const rRow = (name, desc) =>
  `<tr><td><code>${name}</code></td><td>${desc}</td></tr>`;

const callout = (kind, title, body) => {
  const icon =
    kind === "warn" ? WARN_ICON : kind === "ok" ? OK_ICON : INFO_ICON;
  return `<div class="callout ${kind} reveal">${icon}<div><b>${title}</b>${body}</div></div>`;
};
const authChip = `<span class="chip">Header <b>Authorization: Zoho-oauthtoken {{access token}}</b></span>`;

// ---- Example payloads (from the Postman collection) ----
const CREATE_INVOICE_BODY = `{
  "mazad_user_id": "120",
  "mazad_asset_owner": "119",
  "mazad_invoice_type": "Bidder",
  "mazad_lot_number": "15679",
  "mazad_auction_category": "DS Vehicles",
  "mazad_salesperson": "Ahmed Ali",
  "date": "2026-10-07",
  "due_date": "2026-10-25",
  "payment_terms": 7,
  "payment_terms_label": "Due on Receipt",
  "reference_number": "Lot 15679",
  "notes": "Thank you for your participation and prompt payment. We appreciate your trust in Mazad.",
  "line_items": [
    {
      "books_item_id": "1528435000000305443",
      "name": "Auction Sale Price - Lot 15679",
      "description": "2017 MITSUBISHI L 200",
      "rate": 2500,
      "quantity": 2,
      "tax_id": "1528435000000140027"
    },
    {
      "books_item_id": "1528435000000305451",
      "name": "Auction Fees",
      "description": "1% Auction Fees calculated on the Auction Sale Price (Lot 15679)",
      "rate": 2500,
      "quantity": 1
    }
  ]
}`;

const CREATE_INVOICE_RESPONSE = `{
  "code": 0,
  "message": "success",
  "response": {
    "client_asset_owner_id": "119",
    "code": 0,
    "zoho_customer_id": "1528435000000146089",
    "zoho_asset_owner_id": "1528435000000107011",
    "client_customer_id": "110",
    "invoice_id": "1528435000000186002",
    "customer_name": "John test",
    "message": "Invoice created successfully",
    "asset_owner_name": "test 2",
    "invoice_number": "INV-000042"
  }
}`;

const CREATE_PAYMENT_BODY = `{
  "mazad_user_id": "120",
  "amount": 1000,
  "channel": "gateway",
  "payment_mode": "creditcard",
  "rrn": "NBB20t4o802w7h48wjwefeew33g7yje30001",
  "invoices": [
    {
      "invoice_id": "1528435000000699002",
      "amount_applied": 1000
    }
  ],
  "date": "2026-10-20"
}`;

const CREATE_PAYMENT_RESPONSE = `{
  "code": 0,
  "message": "success",
  "response": {
    "code": 0,
    "zoho_customer_id": "1528435000000146089",
    "payment_number": "16",
    "payment_id": "1528435000000187014",
    "client_customer_id": "3001",
    "customer_name": "John test",
    "message": "Payment created successfully"
  }
}`;

const CUSTOMER_DEPOSIT_BODY = `{
  "mazad_user_id": "114",
  "amount": 4000.000,
  "rrn": "NBB20tdskjfkls834736768832hii89o80233e30001",
  "channel": "gateway",
  "mode": "creditcard",
  "date": "2026-05-18"
}`;

const REFUND_BODY = `{
  "mazad_user_id": "115",
  "refund_amount": 5000,
  "rrn": "NBB20tdskj4eopfgeg4euh9o9e89o80233e30001",
  "refund_reference": "REF-068",
  "date": "2026-10-30"
}`;

const APPLY_CREDIT_BODY = `{
  "mazad_user_id": "115",
  "invoice_id": "1528435000000647002",
  "payments": [
    {
      "payment_id": "1528435000000705002",
      "amount": 560
    }
  ]
}`;

const CREDIT_NOTE_BODY = `{
  "customer_id": "1528435000000146089",
  "date": "2026-10-07",
  "reference_number": "INV-000041",
  "place_of_supply": "BH",
  "currency_id": "1528435000000096097",
  "exchange_rate": 1,
  "line_items": [
    {
      "name": "test item 1",
      "description": "Credit note against invoice INV-000041",
      "rate": 2000,
      "quantity": 1
    },
    {
      "name": "test item 2",
      "description": "Credit note against invoice INV-000041",
      "rate": 200,
      "quantity": 1
    }
  ],
  "notes": "Credit note for invoice INV-000041"
}`;

const CREDIT_NOTE_RESPONSE = `{
  "code": 0,
  "message": "The credit note has been created.",
  "creditnote": {
    "creditnote_id": "1528435000000185005",
    "creditnote_number": "CN-00012",
    "status": "open",
    "reference_number": "INV-000041",
    "invoice_id": "1528435000000186002",
    "invoice_number": "INV-000042",
    "customer_id": "1528435000000146089",
    "customer_name": "John test",
    "total": 2200.000,
    "total_credits_used": 200.000,
    "balance": 2000.000
  }
}`;

const INVOICE_LINK_BODY = `{
  "invoice_id": "1528435000000281002"
}`;

const INVOICE_LINK_RESPONSE = `{
  "code": 0,
  "message": "success",
  "response": {
    "code": 0,
    "download_url": "https://mazad-invoices-942230013.development.catalystserverless.com/server/invoice/1528435000000281002.pdf?download=true",
    "invoice_id": "1528435000000281002",
    "view_url": "https://mazad-invoices-942230013.development.catalystserverless.com/server/invoice/1528435000000281002.pdf",
    "message": "Success"
  }
}`;

const TOKEN_RESPONSE = `{
  "access_token": "1000.xxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxx",
  "refresh_token": "1000.xxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxx",
  "api_domain": "https://www.zohoapis.com",
  "token_type": "Bearer",
  "expires_in": 3600
}`;

const capCard = (href, cat, method, title, desc) =>
  `<a class="cap card reveal" href="${href}"><div class="cat">${cat}</div><h5><span class="m ${method}" ${CAP_M}>${method}</span>${title}</h5><p>${desc}</p></a>`;

const step = (n, title, body, link) =>
  `<div class="step reveal"><div class="n">${n}</div><div class="body card"><h5>${title}</h5><p>${body}</p>${link ? `<a class="go" href="${link}">View endpoint &rarr;</a>` : ""}</div></div>`;

const epHead = (id, method, title, idx) =>
  `<div class="ep-head reveal"><span class="method ${method}">${method}</span><h3>${title}</h3><span class="idx">${idx}</span><a class="anchor" href="#${id}" aria-label="Link">#</a></div>`;

const sec = (num, title, id) =>
  `<h2 class="sec reveal"><span class="num">${num}</span>${title}<a class="anchor" href="#${id}" aria-label="Link">#</a></h2>`;

const tokenUrlBox = (firstKey, firstVal, grant) => {
  const raw = `https://accounts.zoho.com/oauth/v2/token?${firstKey}=${firstVal}&amp;client_id=${CLIENT_ID}&amp;client_secret=${CLIENT_SECRET}&amp;redirect_uri=${REDIRECT_URI}&amp;grant_type=${grant}`;
  const shownFirst = firstVal ? `<span class="ph">${firstVal}</span>` : "";
  return `
  <div class="url-box reveal">
    <div class="url-top"><span class="method POST">POST</span><span class="grow">Endpoint URL</span>${copyBtn(raw)}</div>
    <div class="url"><span class="base">https://accounts.zoho.com/oauth/v2/token</span><span class="q">?</span><span class="pr"><span class="k">${firstKey}</span><span class="q">=</span><span class="v">${shownFirst}</span><span class="q">&amp;</span></span><span class="pr"><span class="k">client_id</span><span class="q">=</span><span class="v">${CLIENT_ID}</span><span class="q">&amp;</span></span><span class="pr"><span class="k">client_secret</span><span class="q">=</span><span class="v">${CLIENT_SECRET}</span><span class="q">&amp;</span></span><span class="pr"><span class="k">redirect_uri</span><span class="q">=</span><span class="v">${REDIRECT_URI}</span><span class="q">&amp;</span></span><span class="pr"><span class="k">grant_type</span><span class="q">=</span><span class="v">${grant}</span></span></div>
  </div>`;
};

// Books v3 URL box. `path` may contain {PLACEHOLDER}s; `params` is a list of [key, value, isPlaceholder].
const booksUrlBox = (method, path, params) => {
  const base = "https://www.zohoapis.com/books/v3/";
  const raw =
    base + path + "?" + params.map(([k, v]) => `${k}=${v}`).join("&amp;");
  const shownPath = path.replace(
    /\{[A-Z_]+\}/g,
    (m) => `<span class="ph">${m}</span>`,
  );
  const shownParams = params
    .map(
      ([k, v, ph], i) =>
        `<span class="pr"><span class="k">${k}</span><span class="q">=</span><span class="v">${ph ? `<span class="ph">${v}</span>` : v}</span>${i < params.length - 1 ? '<span class="q">&amp;</span>' : ""}</span>`,
    )
    .join("");
  return `
  <div class="url-box reveal">
    <div class="url-top"><span class="method ${method}">${method}</span><span class="grow">Endpoint URL</span>${copyBtn(raw)}</div>
    <div class="url"><span class="base">${base}${shownPath}</span><span class="q">?</span>${shownParams}</div>
  </div>`;
};
const ORG_PARAM = ["organization_id", "{{organization_id}}", true];

const documentationMarkup = `
    <div id="progress"></div>
    <header class="header">
      <button class="icon-btn" id="menuBtn" aria-label="Open navigation"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
      <a class="brand" href="#top"><span class="brand-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 13-8.4 8.4a2 2 0 0 1-2.8-2.8L11 10.2" /><path d="m16 16 6-6" /><path d="m8 8 6-6" /><path d="m9 7 8 8" /><path d="m21 11-8-8" /></svg></span><span class="brand-text"><b>MAZAD</b><small>Zoho Books API</small></span></a>
      <span class="header-spacer"></span>
      <button class="search-trigger" id="searchBtn" aria-label="Search documentation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg><span class="t">Search documentation…</span><kbd><span class="mod-key">Ctrl</span> K</kbd></button>
      <span class="pill sandbox">Sandbox</span><span class="pill ver">v1.0</span>
      <button class="icon-btn" id="themeBtn" aria-label="Toggle light / dark theme" title="Toggle theme"><span class="theme-ico"><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg><svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg></span></button>
      <button class="icon-btn logout-btn" id="logoutBtn" type="button" aria-label="Sign out" title="Sign out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" /></svg><span>Sign out</span></button>
    </header>
    <div class="scrim"></div>
    <div class="layout">
      <aside class="sidebar">
        <nav class="nav" aria-label="Documentation">
          <div class="nav-group"><p class="nav-title">Introduction</p><a href="#top">Welcome</a><a href="#overview">Overview</a><a href="#capabilities">API Capabilities</a></div>
          <div class="nav-group"><p class="nav-title">Getting Started</p><a href="#credentials">Credentials</a><a href="#get-client-credentials">Self Client &amp; Tokens</a><a href="#conventions">Request Conventions</a></div>
          <div class="nav-group"><p class="nav-title">Authentication</p><a href="#ep-token-init"><span class="m POST">POST</span>Access &amp; Refresh Token</a><a href="#ep-token-refresh"><span class="m POST">POST</span>Get Access Token</a></div>
          <div class="nav-group"><p class="nav-title">Customers &amp; Vendors</p><a href="#ep-get-customers"><span class="m GET">GET</span>Get Customers</a><a href="#ep-get-vendors"><span class="m GET">GET</span>Get Vendors</a></div>
          <div class="nav-group"><p class="nav-title">Invoices</p><a href="#ep-get-invoices"><span class="m GET">GET</span>Get Invoices</a><a href="#ep-customer-invoices"><span class="m GET">GET</span>Customer Invoices</a><a href="#ep-get-invoice"><span class="m GET">GET</span>Get Invoice</a><a href="#ep-create-invoice"><span class="m POST">POST</span>Create Invoice</a><a href="#ep-get-invoice-pdf"><span class="m GET">GET</span>Get Invoice PDF</a></div>
          <div class="nav-group"><p class="nav-title">Payments</p><a href="#ep-create-deposit"><span class="m POST">POST</span>Create Customer Deposit</a><a href="#ep-create-payment"><span class="m POST">POST</span>Apply Payment to Invoices</a><a href="#ep-apply-credit"><span class="m POST">POST</span>Apply Credit to Invoice</a><a href="#ep-refund"><span class="m POST">POST</span>Refund</a></div>
          <div class="nav-group"><p class="nav-title">Credit Notes</p><a href="#ep-create-credit-note"><span class="m POST">POST</span>Create Credit Note</a></div>
          <div class="nav-group"><p class="nav-title">Invoice URLs</p><a href="#ep-view-url"><span class="m GET">GET</span>Get Invoice View &amp; Download URL</a></div>
          <div class="nav-group"><p class="nav-title">Integration Guide</p><a href="#flow">Integration Flow</a><a href="#rules">Key Rules</a><a href="#quick-reference">Quick Reference</a></div>
        </nav>
      </aside>
      <main>
        <div class="content">
          <header class="hero" id="top" data-spy="top" data-title="Welcome" data-group="Introduction">
            <div class="hero-eyebrow">Client API Documentation</div>
            <h1>Zoho Books API Integration</h1>
            <p>Integrate <b>Mazad</b> with Zoho Books: retrieve customers and vendors, create invoices and payments, issue credit notes, and generate invoice view links using Zoho Books API v3.</p>
            <div class="hero-actions"><a class="btn primary" href="#credentials">Credentials</a><a class="btn ghost" href="#flow">Integration flow</a><a class="btn ghost" href="#quick-reference">Quick reference</a><a class="btn ghost" href="https://documenter.getpostman.com/view/49514057/2sBYHVue2c" target="_blank" rel="noopener noreferrer">Postman collection &nearr;</a></div>
            <dl class="hero-meta">
              <div><dt>Version</dt><dd>1.0</dd></div>
              <div><dt>Published</dt><dd>October 2026</dd></div>
              <div><dt>API</dt><dd>Zoho Books v3</dd></div>
              <div><dt>Authentication</dt><dd>OAuth 2.0</dd></div>
              <div><dt>Environment</dt><dd>Sandbox</dd></div>
            </dl>
          </header>

          <section class="chunk" id="overview" data-title="Overview" data-group="Introduction" data-spy="overview">
            ${sec("01", "Overview", "overview")}
            <p class="lead reveal">This document describes the APIs provided for integrating Mazad with Zoho Books. The collection supports customer and vendor retrieval, invoice operations, invoice PDF download, customer deposits, payments, application of existing credits to invoices, credit notes, and generation of an invoice download URL.</p>
            <p class="reveal">The API requests use Zoho Books API v3 and the Zoho Accounts OAuth token endpoints. Some business operations such as invoice creation, customer deposits, payment creation, credit application, and invoice URL generation are exposed through Zoho Books <b>Incoming Webhooks</b>; for the client integration, these are documented as the corresponding business APIs. The complete Postman collection is published at <a href="https://documenter.getpostman.com/view/49514057/2sBYHVue2c" target="_blank" rel="noopener noreferrer">Postman documentation</a> and is kept up to date with these APIs.</p>
            ${callout("warn", "Environment", `The Organization ID documented in this guide (<code>${ORG_ID}</code>) belongs to the Zoho Books <b>Sandbox</b> environment.`)}
          </section>

          <section class="chunk" id="capabilities" data-title="API Capabilities" data-group="Introduction" data-spy="capabilities">
            <h3 class="sub reveal">1.1 API Capabilities<a class="anchor" href="#capabilities">#</a></h3>
            <p class="reveal">The APIs are grouped into six categories: <b>Authentication</b>, <b>Customers &amp; Vendors</b>, <b>Invoices</b>, <b>Payments</b>, <b>Credit Notes</b> and <b>Invoice URLs</b>. Each card below links to the full reference for that API.</p>
            <div class="cap-grid">
              ${capCard("#ep-token-init", "Authentication", "POST", "Access Token and Refresh Token", "Initialize OAuth credentials using an authorization code.")}
              ${capCard("#ep-token-refresh", "Authentication", "POST", "Get Access Token", "Generate a fresh access token using the configured refresh token.")}
              ${capCard("#ep-get-customers", "Customers &amp; Vendors", "GET", "Get Customers", "Retrieve customer contacts from Zoho Books.")}
              ${capCard("#ep-get-vendors", "Customers &amp; Vendors", "GET", "Get Vendors", "Retrieve vendor contacts from Zoho Books.")}
              ${capCard("#ep-get-invoices", "Invoices", "GET", "Get Invoices", "Retrieve invoices from Zoho Books.")}
              ${capCard("#ep-customer-invoices", "Invoices", "GET", "Get Customer Invoices", "Retrieve invoices belonging to a specific customer.")}
              ${capCard("#ep-get-invoice", "Invoices", "GET", "Get Invoice", "Retrieve one invoice using its invoice ID.")}
              ${capCard("#ep-create-invoice", "Invoices", "POST", "Create Invoice", "Create an invoice based on Mazad information.")}
              ${capCard("#ep-get-invoice-pdf", "Invoices", "GET", "Get Invoice PDF", "Download an invoice as a PDF file.")}
              ${capCard("#ep-create-deposit", "Payments", "POST", "Create Customer Deposit", "Record an advance customer deposit received through a payment channel.")}
              ${capCard("#ep-create-payment", "Payments", "POST", "Apply Payment to Invoices", "Create a payment and apply it across one or more invoices.")}
              ${capCard("#ep-apply-credit", "Payments", "POST", "Apply Credit to Invoice", "Apply an existing customer payment/credit to an invoice.")}
              ${capCard("#ep-refund", "Payments", "POST", "Refund", "Refund an amount from the customer's available credit.")}
              ${capCard("#ep-create-credit-note", "Credit Notes", "POST", "Create Credit Note", "Create a credit note against an invoice.")}
              ${capCard("#ep-view-url", "Invoice URLs", "GET", "Get Invoice View &amp; Download URL", "Generate a hosted view URL and a direct download URL for an invoice PDF.")}
            </div>
          </section>

          <section class="chunk" id="credentials" data-title="Integration Configuration &amp; Credentials" data-group="Getting Started" data-spy="credentials">
            ${sec("02", "Integration Configuration", "credentials")}
            <p class="reveal">The following configuration values are used by the integration. The Organization ID is the Zoho Books Sandbox organization used for this integration.</p>
            <div class="env-banner reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><div><b>Credentials</b><span>Sandbox values for this integration. Treat the Refresh Token and Client Secret as confidential.</span></div></div>
            <div class="cred-grid">
              ${credCard("Organization ID", "Zoho Books Sandbox organization ID.", ORG_ID)}
              ${credCard("Refresh Token", "Used to obtain a fresh access token.", REFRESH_TOKEN, true)}
              ${credCard("Client ID", "OAuth client identifier.", CLIENT_ID)}
              ${credCard("Client Secret", "OAuth client secret.", CLIENT_SECRET, true)}
              ${credCard("Redirect URI", "Configured OAuth redirect URI.", REDIRECT_URI)}
              ${credCard("Grant Type", "Used by the refresh-token access-token request.", "refresh_token")}
            </div>
            ${callout("info", "Access Token", `The access token is the active token used in authenticated Zoho Books API requests. Requests use the header format: <code>Authorization: Zoho-oauthtoken {{access token}}</code>.`)}
          </section>

          <section class="chunk" id="get-client-credentials" data-title="How to Get the Client ID, Client Secret, Code and Tokens (Self Client)" data-group="Getting Started" data-spy="get-client-credentials">
            <h3 class="sub reveal">2.1 How to Get the Client ID, Client Secret, Code &amp; Tokens (Self Client)<a class="anchor" href="#get-client-credentials" aria-label="Link">#</a></h3>
            <p class="reveal">This integration uses a <b>Self Client</b> created in the <b>Zoho API Console</b>. A Self Client has no redirect or consent screen: you generate a short-lived <b>code</b> directly in the API Console and exchange it for the <b>refresh token</b> used by the <a href="#authentication">Authentication APIs</a>. The steps below apply whether you are creating the client for the first time or already have one.</p>
            <div class="flow">
              <div class="step reveal"><div class="n">1</div><div class="body card"><h5>Sign in to the Zoho API Console</h5><p>Sign in with the Zoho account that owns the Zoho Books organization.</p><a class="go" href="https://accounts.zoho.com/signin?servicename=AaaServer&amp;context=&amp;serviceurl=https%3A%2F%2Fapi-console.zoho.com%2F" target="_blank" rel="noopener noreferrer">Open Zoho API Console &rarr;</a></div></div>
              ${step(2, "Create the Self Client, or open the existing one", `<b>New client:</b> click <b>Get Started</b> (or <b>Add Client</b>), choose <b>Self Client</b>, click <b>Create</b> and confirm the prompt. <b>Client already created:</b> do not create another one. On the API Console home page, click the existing Self Client to open it. In both cases you will see the <b>Generate Code</b> and <b>Client Secret</b> tabs.`)}
              ${step(3, "Copy the Client ID and Client Secret", `Open the <b>Client Secret</b> tab of the Self Client and copy the <b>Client ID</b> and <b>Client Secret</b>. These are the <code>client_id</code> and <code>client_secret</code> values used in the token requests.`)}
              ${step(4, "Confirm the Sandbox and note its Organization ID", `This documentation targets the Zoho Books <b>Sandbox</b>. If the Sandbox has already been created, open the Sandbox organization in Zoho Books and go to <b>Settings &rarr; Organization Profile</b> to read its <b>Organization ID</b> (<code>${ORG_ID}</code> for this integration). This is the value passed as <code>organization_id</code> in the API requests. If no Sandbox exists yet, create it in Zoho Books first.`)}
              ${step(5, "Choose the scopes", `Decide which scopes the code must carry. See <a href="#get-client-scopes">Scopes</a> below.`)}
              ${step(6, "Generate the code", `Open the <b>Generate Code</b> tab, paste the scopes, choose the time duration, add a description and click <b>Create</b>. Copy the code that is shown. See <a href="#get-client-code">Generate the code</a> below.`)}
              ${step(7, "Exchange the code for the tokens", `Send the code with the Client ID and Client Secret to the Zoho token endpoint. The response contains the <b>access token</b> and the <b>refresh token</b>. See <a href="#get-client-tokens">Exchange the code</a> below.`)}
              ${step(8, "Store the refresh token", `Save the <code>refresh_token</code> securely. From now on, use <a href="#ep-token-refresh">Get Access Token</a> to generate a fresh access token whenever one is needed.`)}
            </div>
            ${callout("info", "If the client is already created", `Use the existing Self Client. If you still have a valid <code>refresh_token</code>, skip straight to <a href="#ep-token-refresh">Get Access Token</a>. If the refresh token is lost, or you need different scopes, repeat steps 5 to 7 on the same client to get a new code and a new refresh token.`)}
            <h4 class="mini reveal" id="get-client-scopes">Scopes</h4>
            <p class="reveal">Scopes decide which Zoho Books APIs the tokens may call. Zoho Books scopes use the format <code>ZohoBooks.&lt;module&gt;.&lt;OPERATION&gt;</code>. Separate several scopes with a comma and no spaces. The scopes needed for the OAuth-authenticated APIs in this documentation are:</p>
            <div class="tbl-wrap reveal"><table><thead><tr><th>API</th><th>Scope</th></tr></thead><tbody>
              <tr><td>Get Customers, Get Vendors</td><td><code>ZohoBooks.contacts.READ</code></td></tr>
              <tr><td>Get Invoices, Get Customer Invoices, Get Invoice, Get Invoice PDF</td><td><code>ZohoBooks.invoices.READ</code></td></tr>
              <tr><td>Create Credit Note</td><td><code>ZohoBooks.creditnotes.CREATE</code></td></tr>
            </tbody></table></div>
            <div class="url-box reveal"><div class="url-top"><span class="grow">Scope value to paste</span>${copyBtn("ZohoBooks.contacts.READ,ZohoBooks.invoices.READ,ZohoBooks.creditnotes.CREATE", "Copy", "Copy scopes")}</div><div class="url"><span class="v">ZohoBooks.contacts.READ,ZohoBooks.invoices.READ,ZohoBooks.creditnotes.CREATE</span></div></div>
            <div class="url-box reveal"><div class="url-top"><span class="grow">Or, for full access</span>${copyBtn("ZohoBooks.fullaccess.all", "Copy", "Copy scope")}</div><div class="url"><span class="v">ZohoBooks.fullaccess.all</span></div></div>
            ${callout("info", "Webhook-based APIs", `Create Invoice, Create Customer Deposit, Apply Payment to Invoices, Apply Credit to Invoice and Get Invoice View &amp; Download URL are called with the API key in the URL (<code>encapiKey</code>), so they do not use these OAuth scopes. <code>ZohoBooks.fullaccess.all</code> is the simplest choice for the Sandbox; use the specific scopes above when you want to limit access.`)}
            <h4 class="mini reveal" id="get-client-code">Generate the code</h4>
            <p class="reveal">In the Self Client, open the <b>Generate Code</b> tab and fill in the fields below, then click <b>Create</b>. The console displays the code; copy it immediately.</p>
            ${paramTable(
              ["Field", "Required", "Value / Description"],
              [
                pRow(
                  "Scope",
                  true,
                  "The scopes from the table above, comma separated. For example <code>ZohoBooks.contacts.READ,ZohoBooks.invoices.READ,ZohoBooks.creditnotes.CREATE</code>.",
                ),
                pRow(
                  "Time Duration",
                  true,
                  "How long the code stays valid. Choose a duration long enough to complete the token request (for example 10 minutes).",
                ),
                pRow(
                  "Scope Description",
                  true,
                  "A short note describing the purpose, for example <code>Mazad Zoho Books integration</code>.",
                ),
              ],
            )}
            ${callout("warn", "The code is short-lived and single-use", "The code expires after the selected time duration and can be used only once. If the token request fails because the code is invalid or expired, generate a new code and try again.")}
            <h4 class="mini reveal" id="get-client-tokens">Exchange the code for the access and refresh tokens</h4>
            <p class="reveal">Send the following request (this is the same endpoint described in <a href="#ep-token-init">Access Token and Refresh Token</a>). Replace <code>{{code}}</code>, <code>{{client_id}}</code> and <code>{{client_secret}}</code> with the values copied in the previous steps.</p>
            <div class="url-box reveal"><div class="url-top"><span class="method POST">POST</span><span class="grow">Endpoint URL</span>${copyBtn(`https://accounts.zoho.com/oauth/v2/token?code={{code}}&amp;client_id={{client_id}}&amp;client_secret={{client_secret}}&amp;redirect_uri=${REDIRECT_URI}&amp;grant_type=authorization_code`)}</div><div class="url"><span class="base">https://accounts.zoho.com/oauth/v2/token</span><span class="q">?</span><span class="pr"><span class="k">code</span><span class="q">=</span><span class="v"><span class="ph">{{code}}</span></span><span class="q">&amp;</span></span><span class="pr"><span class="k">client_id</span><span class="q">=</span><span class="v"><span class="ph">{{client_id}}</span></span><span class="q">&amp;</span></span><span class="pr"><span class="k">client_secret</span><span class="q">=</span><span class="v"><span class="ph">{{client_secret}}</span></span><span class="q">&amp;</span></span><span class="pr"><span class="k">redirect_uri</span><span class="q">=</span><span class="v">${REDIRECT_URI}</span><span class="q">&amp;</span></span><span class="pr"><span class="k">grant_type</span><span class="q">=</span><span class="v">authorization_code</span></span></div></div>
            ${codeBlock("2.1.1 Token Response", "SUCCESS", TOKEN_RESPONSE)}
            <div class="tbl-wrap reveal"><table><thead><tr><th>Response Field</th><th>Description</th></tr></thead><tbody>
              ${rRow("access_token", "Token used in the <code>Authorization: Zoho-oauthtoken {{access token}}</code> header. It is valid for the time given in <code>expires_in</code> (3600 seconds, one hour).")}
              ${rRow("refresh_token", "Long-lived token used to generate new access tokens. It is returned in this response only, so store it securely.")}
              ${rRow("api_domain", "Base domain of the Zoho APIs for this data center.")}
              ${rRow("token_type", "Token type, <code>Bearer</code>.")}
              ${rRow("expires_in", "Access token lifetime in seconds.")}
            </tbody></table></div>
            ${callout("warn", "Keep the secrets confidential", "Do not share the Client Secret or the refresh token publicly or commit them to source control. Anyone holding them can obtain access tokens for the organization.")}
            ${callout("ok", "Next step", `Use <a href="#ep-token-refresh">Get Access Token</a> with the stored refresh token to generate access tokens, then call the Zoho Books APIs in the sections that follow.`)}
          </section>

          <section class="chunk" id="conventions" data-title="General Request Conventions" data-group="Getting Started" data-spy="conventions">
            ${sec("03", "General Request Conventions", "conventions")}
            <div class="tbl-wrap reveal"><table><thead><tr><th>Item</th><th>Description</th></tr></thead><tbody>
              <tr><td>Authentication header</td><td>Authenticated Zoho Books requests use <code>Authorization: Zoho-oauthtoken {{access token}}</code>. Webhook-based APIs authenticate with the <code>encapiKey</code> in the URL instead.</td></tr>
              <tr><td>Content-Type</td><td>JSON POST requests use <code>application/json</code>. The OAuth token requests use the Content-Type value configured in the Postman collection.</td></tr>
              <tr><td>Organization ID</td><td>The Zoho Books Sandbox organization ID is <code>${ORG_ID}</code>. It is used as the <code>organization_id</code> query parameter where applicable.</td></tr>
              <tr><td>IDs</td><td>Customer IDs, invoice IDs, credit note IDs, tax IDs, and other Zoho IDs should be stored and passed exactly as returned by the APIs.</td></tr>
              <tr><td>Dates</td><td>The request examples use <code>YYYY-MM-DD</code> format.</td></tr>
            </tbody></table></div>
          </section>

          <section class="chunk" id="authentication" data-title="Authentication APIs" data-group="Authentication APIs" data-spy="authentication">
            ${sec("04", "Authentication APIs", "authentication")}
            <p class="reveal">OAuth endpoints hosted on Zoho Accounts. Exchange an authorization code once, then use the refresh token to mint fresh access tokens.</p>
          </section>

          <article class="chunk endpoint" id="ep-token-init" data-title="Access Token and Refresh Token" data-group="Authentication APIs" data-method="POST" data-spy="ep-token-init">
            ${epHead("ep-token-init", "POST", "Access Token and Refresh Token", "4.1")}
            <p class="reveal">Exchanges an authorization code for an OAuth access token and refresh token. This request is used to initialize the credentials.</p>
            ${tokenUrlBox("code", "", "authorization_code")}
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "code",
                  true,
                  "Authorization code received for the OAuth authorization.",
                ),
                pRow("client_id", true, "Configured OAuth client ID."),
                pRow("client_secret", true, "Configured OAuth client secret."),
                pRow(
                  "redirect_uri",
                  true,
                  `Configured redirect URI: <code>${REDIRECT_URI}</code>`,
                ),
                pRow("grant_type", true, "<code>authorization_code</code>"),
              ],
            )}
          </article>

          <article class="chunk endpoint" id="ep-token-refresh" data-title="Get Access Token" data-group="Authentication APIs" data-method="POST" data-spy="ep-token-refresh">
            ${epHead("ep-token-refresh", "POST", "Get Access Token", "4.2")}
            <p class="reveal">Generates a fresh access token using the configured refresh token. The resulting access token is used in subsequent authenticated requests.</p>
            ${tokenUrlBox("refresh_token", "{{refresh token}}", "refresh_token")}
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "refresh_token",
                  true,
                  `The configured refresh token. See <a href="#credentials">Integration Configuration</a>.`,
                ),
                pRow("client_id", true, "Configured OAuth client ID."),
                pRow("client_secret", true, "Configured OAuth client secret."),
                pRow(
                  "redirect_uri",
                  true,
                  `Configured redirect URI: <code>${REDIRECT_URI}</code>`,
                ),
                pRow("grant_type", true, "<code>refresh_token</code>"),
              ],
            )}
          </article>

          <section class="chunk" id="customers" data-title="Customer &amp; Vendor APIs" data-group="Customer &amp; Vendor APIs" data-spy="customers">
            ${sec("05", "Customer &amp; Vendor APIs", "customers")}
            <p class="reveal">Contacts in Zoho Books are categorized by <code>contact_type</code>. Customers are retrieved with <code>contact_type=customer</code> and vendors with <code>contact_type=vendor</code>; both use the same <code>contacts</code> endpoint and the same pagination parameters.</p>
          </section>

          <article class="chunk endpoint" id="ep-get-customers" data-title="Get Customers" data-group="Customer &amp; Vendor APIs" data-method="GET" data-spy="ep-get-customers">
            ${epHead("ep-get-customers", "GET", "Get Customers", "5.1")}
            <p class="reveal">Retrieves customer contacts from Zoho Books. The request filters contacts using <code>contact_type=customer</code>.</p>
            ${booksUrlBox("GET", "contacts", [ORG_PARAM, ["contact_type", "customer"], ["page", "1"]])}
            <div class="meta-chips reveal">${authChip}</div>
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "organization_id",
                  true,
                  `Zoho Books Sandbox organization ID. Use <code>${ORG_ID}</code>.`,
                ),
                pRow("contact_type", true, "Set to <code>customer</code>."),
                pRow(
                  "page",
                  true,
                  "Page number to retrieve. Increase this value to retrieve subsequent pages.",
                ),
                pRow(
                  "per_page",
                  false,
                  "Controls the number of records returned per page.",
                ),
              ],
            )}
            ${callout("info", "Pagination", "If the first page does not contain all customers, request <code>page=2</code>, <code>page=3</code>, and so on. Use <code>per_page</code> to control the number of records requested per page. Continue until there are no more records to retrieve.")}
          </article>

          <article class="chunk endpoint" id="ep-get-vendors" data-title="Get Vendors" data-group="Customer &amp; Vendor APIs" data-method="GET" data-spy="ep-get-vendors">
            ${epHead("ep-get-vendors", "GET", "Get Vendors", "5.2")}
            <p class="reveal">Retrieves vendor contacts from Zoho Books using <code>contact_type=vendor</code>.</p>
            ${booksUrlBox("GET", "contacts", [ORG_PARAM, ["contact_type", "vendor"], ["per_page", "2"]])}
            <div class="meta-chips reveal">${authChip}</div>
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "organization_id",
                  true,
                  "Zoho Books Sandbox organization ID.",
                ),
                pRow("contact_type", true, "Set to <code>vendor</code>."),
                pRow(
                  "page",
                  false,
                  "Page number. Increase this value to retrieve subsequent pages.",
                ),
                pRow(
                  "per_page",
                  false,
                  "Number of records requested per page.",
                ),
              ],
            )}
            ${callout("info", "Pagination", "To retrieve the next set of vendors, increment the <code>page</code> value. For example, after <code>page=1</code>, request <code>page=2</code>, then <code>page=3</code>, until no further records are returned.")}
          </article>

          <section class="chunk" id="invoices" data-title="Invoice APIs" data-group="Invoice APIs" data-spy="invoices">
            ${sec("06", "Invoice APIs", "invoices")}
          </section>

          <article class="chunk endpoint" id="ep-get-invoices" data-title="Get Invoices" data-group="Invoice APIs" data-method="GET" data-spy="ep-get-invoices">
            ${epHead("ep-get-invoices", "GET", "Get Invoices", "6.1")}
            <p class="reveal">Retrieves invoice records for the configured Zoho Books organization.</p>
            ${booksUrlBox("GET", "invoices", [ORG_PARAM])}
            <div class="meta-chips reveal">${authChip}</div>
            ${paramTable(["Parameter", "Required", "Description"], [pRow("organization_id", true, "Zoho Books Sandbox organization ID.")])}
          </article>

          <article class="chunk endpoint" id="ep-customer-invoices" data-title="Get Invoices of a Customer" data-group="Invoice APIs" data-method="GET" data-spy="ep-customer-invoices">
            ${epHead("ep-customer-invoices", "GET", "Get Invoices of a Customer", "6.2")}
            <p class="reveal">Retrieves invoices belonging to a specific customer. The <code>customer_id</code> must be supplied dynamically by the client.</p>
            ${booksUrlBox("GET", "invoices", [ORG_PARAM, ["customer_id", "{CUSTOMER_ID}", true]])}
            <div class="meta-chips reveal">${authChip}</div>
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "organization_id",
                  true,
                  "Zoho Books Sandbox organization ID.",
                ),
                pRow(
                  "customer_id",
                  true,
                  `The Zoho Books customer ID for which invoices should be retrieved, for example <code>1528435000000225015</code>. Obtain it from <a href="#ep-get-customers">Get Customers</a>.`,
                ),
              ],
            )}
          </article>

          <article class="chunk endpoint" id="ep-get-invoice" data-title="Get an Invoice" data-group="Invoice APIs" data-method="GET" data-spy="ep-get-invoice">
            ${epHead("ep-get-invoice", "GET", "Get an Invoice", "6.3")}
            <p class="reveal">Retrieves a specific invoice using its Zoho Books invoice ID.</p>
            ${booksUrlBox("GET", "invoices/{INVOICE_ID}", [ORG_PARAM])}
            <div class="meta-chips reveal">${authChip}</div>
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "INVOICE_ID",
                  true,
                  "The invoice ID returned when the invoice was created, for example <code>1528435000000699002</code>.",
                ),
                pRow(
                  "organization_id",
                  true,
                  "Zoho Books Sandbox organization ID.",
                ),
              ],
            )}
          </article>

          <article class="chunk endpoint" id="ep-create-invoice" data-title="Create Invoice" data-group="Invoice APIs" data-method="POST" data-spy="ep-create-invoice">
            ${epHead("ep-create-invoice", "POST", "Create Invoice", "6.4")}
            <p class="reveal">Creates an invoice in Zoho Books based on the information provided by Mazad.</p>
            ${webhookUrlBox("POST", WH_CREATE_INVOICE)}
            <div class="meta-chips reveal"><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("create-invoice.json", "REQUEST", CREATE_INVOICE_BODY)}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(
              ["Field", "Required", "Description"],
              [
                pRow(
                  "mazad_user_id",
                  true,
                  "The customer's ID stored in Mazad's own database. It must correspond to an existing customer in Zoho Books.",
                ),
                pRow(
                  "mazad_asset_owner",
                  true,
                  "The asset (lot) owner's ID as stored in Mazad's database. It must correspond to an existing customer in Zoho Books. Returned in the response as <code>client_asset_owner_id</code>.",
                ),
                pRow(
                  "mazad_invoice_type",
                  true,
                  "Invoice type, for example <code>Bidder</code>.",
                ),
                pRow(
                  "mazad_lot_number",
                  true,
                  "Lot number associated with the auction, for example <code>15679</code>.",
                ),
                pRow(
                  "mazad_auction_category",
                  true,
                  "Auction category, for example <code>DS Vehicles</code>.",
                ),
                pRow(
                  "mazad_salesperson",
                  false,
                  "Salesperson name, for example <code>Ahmed Ali</code>.",
                ),
                pRow(
                  "date",
                  false,
                  "Invoice date in <code>YYYY-MM-DD</code> format.",
                ),
                pRow(
                  "due_date",
                  false,
                  "Invoice due date in <code>YYYY-MM-DD</code> format.",
                ),
                pRow(
                  "payment_terms",
                  false,
                  "Payment terms in days. <code>0</code> means the invoice is due immediately.",
                ),
                pRow(
                  "payment_terms_label",
                  false,
                  "Payment terms label, for example <code>Due on Receipt</code>.",
                ),
                pRow(
                  "reference_number",
                  false,
                  "Invoice reference number, for example <code>Lot 15679</code>.",
                ),
                pRow(
                  "notes",
                  false,
                  "Additional invoice notes shown on the invoice.",
                ),
                pRow(
                  "line_items",
                  true,
                  "Array of invoice items. It must contain at least one line item.",
                ),
                pRow(
                  "line_items[].books_item_id",
                  true,
                  "Zoho Books item ID the line is created against, for example <code>1528435000000305443</code> (Auction Sale Price) or <code>1528435000000305451</code> (Auction Fees).",
                  true,
                ),
                pRow(
                  "line_items[].name",
                  false,
                  "Item name, for example <code>Auction Sale Price - Lot 15679</code>.",
                  true,
                ),
                pRow(
                  "line_items[].description",
                  false,
                  "Item description, for example the auctioned vehicle.",
                  true,
                ),
                pRow(
                  "line_items[].rate",
                  true,
                  "Numeric rate / unit price. Must be greater than or equal to 0.",
                  true,
                ),
                pRow(
                  "line_items[].quantity",
                  true,
                  "Numeric quantity. Must be greater than 0.",
                  true,
                ),
                pRow(
                  "line_items[].tax_id",
                  false,
                  "Zoho Books tax ID, for example <code>1528435000000140027</code> for the 10% Standard Rate tax. If supplied, that tax is applied to that line item only.",
                  true,
                ),
              ],
            )}
            ${callout("warn", "Mazad IDs", "<code>mazad_user_id</code> and <code>mazad_asset_owner</code> must contain IDs as stored in the Mazad database — they are <b>not</b> Zoho Books IDs. Each must match exactly one existing customer in Zoho Books, otherwise the request fails.")}
            ${callout("info", "Item IDs", "<code>books_item_id</code> is mandatory for every line item and must reference an existing Zoho Books item. Item IDs can be obtained from Zoho Books &rarr; Items by opening the required item.")}
            ${callout("info", "Tax ID", "If <code>tax_id</code> is provided for a line item, the specified tax is applied only to that item. A line item that omits <code>tax_id</code> &mdash; such as the second item in the example above &mdash; carries no tax. The required Tax ID can be obtained from Zoho Books &rarr; Settings &rarr; Taxes by searching for the relevant tax.")}
            ${callout("ok", "Store the Invoice ID", "After a successful invoice creation, Mazad must store the returned <code>invoice_id</code> in its own database against the corresponding customer/transaction. This ID is required for future invoice-related operations such as retrieving the invoice, generating the invoice download URL, applying payments or credits, and creating a related credit note.")}
            <h4 class="mini reveal">Response</h4>
            ${codeBlock("6.4.1 Successful Response", "SUCCESS", CREATE_INVOICE_RESPONSE)}
            <div class="tbl-wrap reveal"><table><thead><tr><th>Response Field</th><th>Description</th></tr></thead><tbody>
              ${rRow("invoice_id", "Unique Zoho Books invoice ID. Store this ID in Mazad.")}
              ${rRow("invoice_number", "Human-readable invoice number.")}
              ${rRow("client_customer_id", "Mazad customer ID supplied in <code>mazad_user_id</code>.")}
              ${rRow("zoho_customer_id", "Zoho Books customer ID associated with the invoice.")}
              ${rRow("client_asset_owner_id", "Mazad asset owner ID supplied in <code>mazad_asset_owner</code>.")}
              ${rRow("zoho_asset_owner_id", "Zoho Books ID of the asset owner.")}
              ${rRow("customer_name", "Customer name associated with the invoice.")}
              ${rRow("asset_owner_name", "Asset owner name.")}
              ${rRow("message", "Operation result message.")}
            </tbody></table></div>
          </article>

          <article class="chunk endpoint" id="ep-get-invoice-pdf" data-title="Get Invoice PDF" data-group="Invoice APIs" data-method="GET" data-spy="ep-get-invoice-pdf">
            ${epHead("ep-get-invoice-pdf", "GET", "Get Invoice PDF", "6.5")}
            <p class="reveal">Downloads a specific invoice as a PDF file using its Zoho Books invoice ID.</p>
            ${booksUrlBox("GET", "invoices/{INVOICE_ID}", [ORG_PARAM, ["accept", "pdf"]])}
            <div class="meta-chips reveal">${authChip}<span class="chip">Response <b>application/pdf (file)</b></span></div>
            ${paramTable(
              ["Parameter", "Required", "Description"],
              [
                pRow(
                  "INVOICE_ID",
                  true,
                  "The invoice ID returned when the invoice was created.",
                ),
                pRow(
                  "organization_id",
                  true,
                  "Zoho Books Sandbox organization ID.",
                ),
                pRow(
                  "accept",
                  true,
                  "Must be <code>pdf</code> to receive the invoice as a PDF file.",
                ),
              ],
            )}
            ${callout("info", "PDF Response", `The response body is the PDF file itself, not JSON. Save the response as a <code>.pdf</code> file. To get shareable links to the PDF instead of the file bytes, use <a href="#ep-view-url">Get Invoice View &amp; Download URL</a>.`)}
          </article>

          <section class="chunk" id="payments" data-title="Payment APIs" data-group="Payment APIs" data-spy="payments">
            ${sec("07", "Payment APIs", "payments")}
            <p class="reveal">Three payment operations are available. <a href="#ep-create-deposit">Create Customer Deposit</a> records money received from a customer as an advance (unapplied) payment. <a href="#ep-create-payment">Apply Payment to Invoices</a> creates a payment and applies it directly to one or more invoices. <a href="#ep-apply-credit">Apply Credit to Invoice</a> applies an existing customer payment — such as a deposit recorded earlier — to an invoice. <a href="#ep-refund">Refund</a> returns money from the customer's available credit.</p>
          </section>

          <article class="chunk endpoint" id="ep-create-deposit" data-title="Create Customer Deposit" data-group="Payment APIs" data-method="POST" data-spy="ep-create-deposit">
            ${epHead("ep-create-deposit", "POST", "Create Customer Deposit", "7.1")}
            <p class="reveal">Records a customer deposit in Zoho Books. The deposit is created as an advance payment for the customer and is not applied to any invoice; it stays available as a credit that can later be applied with <a href="#ep-apply-credit">Apply Credit to Invoice</a>.</p>
            ${webhookUrlBox("POST", WH_CREATE_DEPOSIT)}
            <div class="meta-chips reveal"><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("create-customer-deposit.json", "REQUEST", CUSTOMER_DEPOSIT_BODY)}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(
              ["Field", "Required", "Description"],
              [
                pRow(
                  "mazad_user_id",
                  true,
                  "The customer's Mazad ID. It must match exactly one customer in Zoho Books.",
                ),
                pRow(
                  "amount",
                  true,
                  "Deposit amount. Must be numeric and greater than 0.",
                ),
                pRow(
                  "rrn",
                  true,
                  "Retrieval Reference Number from the payment gateway. It is recorded as the payment reference in Zoho Books.",
                ),
                pRow(
                  "channel",
                  false,
                  "Payment channel. Supported values: <code>gateway</code>, <code>benefit</code>, <code>cheque</code>, <code>bank_transfer</code>, <code>fawri</code>, <code>pos</code>. Optional only when both <code>account_id</code> and <code>mode</code> are provided.",
                ),
                pRow(
                  "mode",
                  false,
                  "Payment mode. Supported values: <code>creditcard</code>, <code>check</code>, <code>banktransfer</code>.",
                ),
                pRow(
                  "date",
                  false,
                  "Deposit date in <code>YYYY-MM-DD</code> format. Defaults to today's date when omitted or empty.",
                ),
                pRow(
                  "description",
                  false,
                  "Deposit description. When omitted, a default description is generated automatically.",
                ),
              ],
            )}
            ${callout("warn", "RRN is mandatory", "Every deposit must carry the <code>rrn</code> returned by the payment gateway. It is the reference the deposit is recorded under in Zoho Books, so it should be stored in Mazad alongside the deposit.")}
            <h4 class="mini reveal">Channel &rarr; deposit account mapping</h4>
            <p class="reveal">When <code>channel</code> is supplied, the receiving account and the payment mode are resolved automatically using the mapping below. The Zoho Books account IDs are listed for both environments: use the <b>Sandbox</b> ID against the Sandbox organization (<code>${ORG_ID}</code>) and the <b>Production</b> ID against the live organization.</p>
            <div class="tbl-wrap reveal"><table><thead><tr><th>Channel</th><th>Deposit account</th><th>Account ID (Sandbox)</th><th>Account ID (Production)</th><th>Mode</th></tr></thead><tbody>
              <tr><td><code>gateway</code><br /><small>Apple Pay, Mastercard, Visa, Amex</small></td><td>NBB Merchant 191327199 (10551)</td><td><code>1528435000000305020</code></td><td><code>6939116000001191479</code></td><td><code>creditcard</code></td></tr>
              <tr><td><code>benefit</code></td><td>NBB Merchant 15170600 (10551C)</td><td><code>1528435000000305044</code></td><td><code>6939116000002836082</code></td><td><code>creditcard</code></td></tr>
              <tr><td><code>cheque</code></td><td>Deposits &mdash; Pending Bank Allocation (554433)</td><td><code>1528435000000305028</code></td><td><code>6939116000001272452</code></td><td><code>check</code></td></tr>
              <tr><td><code>bank_transfer</code> / <code>fawri</code></td><td>Deposits &mdash; Pending Bank Allocation (554433)</td><td><code>1528435000000305028</code></td><td><code>6939116000001272452</code></td><td><code>banktransfer</code></td></tr>
              <tr><td><code>pos</code></td><td>Deposits &mdash; NBB Merchant Account (910911199) (10551B)  </td><td><code>1528435000000305036</code></td><td><code>6939116000002836072</code></td><td><code>creditcard</code></td></tr>
            </tbody></table></div>
            ${callout("warn", "Match the ID to the environment", `Account IDs are not shared between organizations. Sending a Production account ID to the Sandbox organization &mdash; or the reverse &mdash; is rejected. The example request above uses the Sandbox ID <code>1528435000000305020</code>.`)}
            ${callout("ok", "Store the Payment ID", `The deposit is created as a customer payment in Zoho Books. Store the returned payment ID in Mazad — it is the <code>payment_id</code> required by <a href="#ep-apply-credit">Apply Credit to Invoice</a> when the deposit is later used against an invoice.`)}
            ${callout("info", "Response", "The response follows the same envelope as the other webhook APIs: <code>code</code>, <code>message</code> and a <code>response</code> object carrying the created payment details and the mapped Zoho customer.")}
          </article>

          <article class="chunk endpoint" id="ep-create-payment" data-title="Apply Payment to Invoices" data-group="Payment APIs" data-method="POST" data-spy="ep-create-payment">
            ${epHead("ep-create-payment", "POST", "Apply Payment to Invoices", "7.2")}
            <p class="reveal">Creates a payment in Zoho Books based on the supplied Mazad payment information and applies the payment to the specified invoice(s). A single payment can be split across several invoices.</p>
            ${webhookUrlBox("POST", WH_CREATE_PAYMENT)}
            <div class="meta-chips reveal"><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("create-payment.json", "REQUEST", CREATE_PAYMENT_BODY)}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(
              ["Field", "Required", "Description"],
              [
                pRow(
                  "mazad_user_id",
                  true,
                  "The Mazad customer ID. It must correspond to an existing customer in Zoho Books.",
                ),
                pRow(
                  "amount",
                  true,
                  "Total payment amount. Must be numeric and greater than 0. The sum of all invoice allocations must <b>equal</b> this amount.",
                ),
                pRow(
                  "channel",
                  true,
                  `Payment channel. Accepted values: <code>gateway</code>, <code>benefit</code>, <code>cheque</code>, <code>bank_transfer</code>, <code>fawri</code>, <code>pos</code>. It determines the receiving account and the payment mode automatically, using the <a href="#ep-create-deposit">same mapping as Create Customer Deposit</a>.`,
                ),
                pRow(
                  "rrn",
                  true,
                  "Retrieval Reference Number from the payment gateway. It is passed to Zoho Books as the payment's <code>reference_number</code>.",
                ),
                pRow(
                  "payment_mode",
                  false,
                  "Payment mode. Accepted values: <code>creditcard</code>, <code>check</code>, <code>banktransfer</code>. When supplied it must match the mode the <code>channel</code> maps to.",
                ),
                pRow(
                  "invoices",
                  true,
                  "Array of invoices to which the payment is applied. At least one invoice is required.",
                ),
                pRow(
                  "invoices[].invoice_id",
                  true,
                  `Zoho Books invoice ID, for example <code>1528435000000699002</code>. It must belong to the specified customer and have an outstanding balance. Obtain it from <a href="#ep-create-invoice">Create Invoice</a> or <a href="#ep-get-invoices">Get Invoices</a>.`,
                  true,
                ),
                pRow(
                  "invoices[].amount_applied",
                  true,
                  "Amount to apply to that invoice. Must be greater than 0 and must not exceed the invoice's outstanding balance.",
                  true,
                ),
                pRow(
                  "date",
                  false,
                  "Payment date in <code>YYYY-MM-DD</code> format. Defaults to today's date when omitted.",
                ),
                pRow(
                  "description",
                  false,
                  "Payment description, for example <code>Payment received through NBB Merchant</code>.",
                ),
              ],
            )}
            ${callout("warn", "Allocations must equal the amount", 'Unlike a deposit, this request leaves nothing unapplied: the <code>amount_applied</code> values across the <code>invoices</code> array must add up to exactly <code>amount</code>. To record money that is not yet tied to an invoice, use <a href="#ep-create-deposit">Create Customer Deposit</a> instead.')}
            ${callout("info", "Channel drives the account and mode", `<code>channel</code> is mandatory and selects the receiving account and payment mode automatically &mdash; see the <a href="#ep-create-deposit">channel mapping table</a>. <code>payment_mode</code> is optional, and when sent it must agree with the channel; otherwise the request is rejected.`)}
            ${callout("info", "Splitting one payment across invoices", "To settle several invoices with a single payment, add one entry per invoice to the <code>invoices</code> array, each with its own <code>amount_applied</code>.")}
            ${callout("ok", "Store the Payment ID", "Store the returned <code>payment_id</code> in Mazad together with the <code>rrn</code>, so the payment can be reconciled with the gateway and referenced by later operations.")}
            <h4 class="mini reveal">Response</h4>
            ${codeBlock("7.2.1 Successful Response", "SUCCESS", CREATE_PAYMENT_RESPONSE)}
            <div class="tbl-wrap reveal"><table><thead><tr><th>Response Field</th><th>Description</th></tr></thead><tbody>
              ${rRow("payment_id", "Unique Zoho Books payment ID.")}
              ${rRow("payment_number", "Payment number generated by Zoho Books.")}
              ${rRow("client_customer_id", "Mazad customer ID supplied in <code>mazad_user_id</code>.")}
              ${rRow("zoho_customer_id", "Zoho Books customer ID.")}
              ${rRow("customer_name", "Customer associated with the payment.")}
              ${rRow("message", "Operation result message.")}
            </tbody></table></div>
          </article>

          <article class="chunk endpoint" id="ep-apply-credit" data-title="Apply Credit to Invoice" data-group="Payment APIs" data-method="POST" data-spy="ep-apply-credit">
            ${epHead("ep-apply-credit", "POST", "Apply Credit to Invoice", "7.3")}
            <p class="reveal">Applies one or more existing customer payments — for example a <a href="#ep-create-deposit">customer deposit</a> or the unapplied balance of an earlier payment — to a specific invoice. Use this endpoint when the money is already recorded in Zoho Books and only needs to be allocated against an invoice.</p>
            ${webhookUrlBox("POST", WH_APPLY_CREDIT)}
            <div class="meta-chips reveal"><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("apply-credit-to-invoice.json", "REQUEST", APPLY_CREDIT_BODY)}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(
              ["Field", "Required", "Description"],
              [
                pRow(
                  "mazad_user_id",
                  true,
                  "The customer's ID from Mazad. It must match exactly one customer in Zoho Books, and the payments and the invoice must belong to that customer.",
                ),
                pRow(
                  "invoice_id",
                  true,
                  `Zoho Books invoice ID the credit is applied to, for example <code>1528435000000538002</code>.`,
                ),
                pRow(
                  "payments",
                  true,
                  "Array of payments to draw the credit from. It must contain at least one payment.",
                ),
                pRow(
                  "payment_id",
                  true,
                  'Zoho Books payment ID holding the unapplied credit, for example <code>1528435000000519134</code>. This is the payment ID returned by <a href="#ep-create-deposit">Create Customer Deposit</a> or <a href="#ep-create-payment">Apply Payment to Invoices</a>.',
                  true,
                ),
                pRow(
                  "amount",
                  true,
                  "Amount to apply from that payment. It cannot exceed the payment's remaining unapplied balance.",
                  true,
                ),
              ],
            )}
            ${callout("warn", "Credit must be available", "Each <code>payment_id</code> must have enough unapplied balance for the requested <code>amount</code>, and the payment must belong to the same customer as the invoice. Applying more than the available credit, or applying more than the invoice balance due, is rejected.")}
            ${callout("info", "Using several credits", "To settle one invoice from multiple deposits or payments, add one entry per payment to the <code>payments</code> array, each with the amount to draw from it.")}
            ${callout("info", "Response", "The response follows the same envelope as the other webhook APIs: <code>code</code>, <code>message</code> and a <code>response</code> object confirming the invoice and the applied credits.")}
          </article>

          <article class="chunk endpoint" id="ep-refund" data-title="Refund" data-group="Payment APIs" data-method="POST" data-spy="ep-refund">
            ${epHead("ep-refund", "POST", "Refund", "7.4")}
            <p class="reveal">Refunds an amount back to a customer. Use it when money already received &mdash; a deposit or a payment &mdash; has to be returned, for example when an auction is cancelled or the customer overpaid.</p>
            ${webhookUrlBox("POST", WH_REFUND)}
            <div class="meta-chips reveal"><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("refund.json", "REQUEST", REFUND_BODY)}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(
              ["Field", "Required", "Description"],
              [
                pRow(
                  "mazad_user_id",
                  true,
                  "The Mazad customer ID being refunded. It must correspond to an existing customer in Zoho Books.",
                ),
                pRow(
                  "refund_amount",
                  true,
                  "Amount to refund. Must be numeric and greater than 0, and cannot exceed the credit available on the customer's account.",
                ),
                pRow(
                  "rrn",
                  true,
                  "Retrieval Reference Number of the original gateway transaction being refunded.",
                ),
                pRow(
                  "refund_reference",
                  true,
                  "Mazad's own reference for the refund, for example <code>REF-068</code>. Store it so the refund can be traced from both systems.",
                ),
                pRow(
                  "date",
                  false,
                  "Refund date in <code>YYYY-MM-DD</code> format. Defaults to today's date when omitted.",
                ),
              ],
            )}
            ${callout("warn", "Field requirements are not annotated in the collection", "Unlike the other webhook requests, the Refund request in the Postman collection carries no per-field annotations. The table above follows the conventions of the other payment APIs &mdash; identifier, amount and references mandatory, date defaulting to today. Confirm against the Zoho function before relying on a field being optional.")}
            ${callout("info", "Refund against available credit", `A refund returns money the customer has already paid in, so the customer must hold enough unapplied credit &mdash; from <a href="#ep-create-deposit">Create Customer Deposit</a> or an unallocated <a href="#ep-create-payment">payment</a>. Credit that has already been applied to an invoice is no longer available to refund.`)}
            ${callout("info", "Response", "The response follows the same envelope as the other webhook APIs: <code>code</code>, <code>message</code> and a <code>response</code> object describing the refund that was created.")}
          </article>

          <section class="chunk" id="credit-notes" data-title="Credit Note API" data-group="Credit Note API" data-spy="credit-notes">
            ${sec("08", "Credit Note API", "credit-notes")}
          </section>

          <article class="chunk endpoint" id="ep-create-credit-note" data-title="Create Credit Note" data-group="Credit Note API" data-method="POST" data-spy="ep-create-credit-note">
            ${epHead("ep-create-credit-note", "POST", "Create Credit Note", "8.1")}
            <p class="reveal">Creates a credit note against an invoice. The invoice ID must be supplied dynamically by the client in the request URL.</p>
            ${booksUrlBox("POST", "creditnotes", [ORG_PARAM, ["invoice_id", "{INVOICE_ID}", true]])}
            <div class="meta-chips reveal">${authChip}<span class="chip">Content-Type <b>application/json</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("create-credit-note.json", "REQUEST", CREDIT_NOTE_BODY)}
            <h4 class="mini reveal">Request fields &amp; parameters</h4>
            ${paramTable(
              ["Field / Parameter", "Required", "Description"],
              [
                pRow(
                  "organization_id",
                  true,
                  "Zoho Books Sandbox organization ID.",
                ),
                pRow(
                  "invoice_id (URL)",
                  true,
                  "Invoice ID supplied dynamically in the URL. This identifies the invoice against which the credit note is created.",
                ),
                pRow("customer_id", true, "Zoho Books customer ID."),
                pRow("date", true, "Credit note date."),
                pRow(
                  "reference_number",
                  false,
                  "Reference number for the credit note.",
                ),
                pRow("place_of_supply", false, "Place of supply."),
                pRow("currency_id", false, "Zoho Books currency ID."),
                pRow("exchange_rate", false, "Exchange rate."),
                pRow("line_items", true, "Items being credited."),
                pRow("line_items[].name", true, "Credit note item name.", true),
                pRow(
                  "line_items[].description",
                  false,
                  "Description of the credited item.",
                  true,
                ),
                pRow("line_items[].rate", true, "Rate/unit price.", true),
                pRow(
                  "line_items[].quantity",
                  true,
                  "Quantity being credited.",
                  true,
                ),
                pRow("notes", false, "Credit note notes."),
              ],
            )}
            <h4 class="mini reveal">Response</h4>
            ${codeBlock("8.1.1 Successful Response", "SUCCESS", CREDIT_NOTE_RESPONSE)}
            ${callout("info", "Concise response", "The actual Zoho response contains additional accounting, tax, line-item, address, template, and system fields. The documentation intentionally shows a concise representation of the success response so the client can focus on the fields most relevant to the integration.")}
          </article>

          <section class="chunk" id="invoice-url" data-title="Invoice View &amp; Download URL API" data-group="Invoice URL API" data-spy="invoice-url">
            ${sec("09", "Invoice View &amp; Download URL API", "invoice-url")}
            <p class="reveal">This API returns hosted links to an invoice PDF. Unlike <a href="#ep-get-invoice-pdf">Get Invoice PDF</a>, which streams the file bytes back in the response, it returns two URLs that Mazad can store and hand to a user or customer directly.</p>
          </section>

          <article class="chunk endpoint" id="ep-view-url" data-title="Get Invoice View and Download URL" data-group="Invoice URL API" data-method="GET" data-spy="ep-view-url">
            ${epHead("ep-view-url", "GET", "Get Invoice View &amp; Download URL", "9.1")}
            <p class="reveal">Generates the hosted URLs for a specific invoice. The response contains a <b>view URL</b> that opens the invoice PDF in the browser and a <b>download URL</b> that downloads the same PDF as a file. Both URLs point to the invoice PDF hosted on Zoho Catalyst.</p>
            ${webhookUrlBox("GET", WH_INVOICE_LINK)}
            <div class="meta-chips reveal"><span class="chip">Method <b>GET with a JSON body</b></span><span class="chip">Content-Type <b>application/json</b></span><span class="chip">Auth <b>API key in URL (encapiKey)</b></span></div>
            <h4 class="mini reveal">Request body</h4>
            ${codeBlock("get-invoice-view-and-download-url.json", "REQUEST", INVOICE_LINK_BODY)}
            ${callout("warn", "GET request with a JSON body", "This endpoint is called with the <b>GET</b> method while still sending the <code>invoice_id</code> in a JSON body. That combination is unusual: some HTTP clients and proxies drop the body from a GET request, which makes the call fail with a missing <code>invoice_id</code>. Use a client that preserves the body, such as Postman, cURL with <code>--data</code>, or a request library that allows a body on GET.")}
            <h4 class="mini reveal">Request fields</h4>
            ${paramTable(["Field", "Required", "Description"], [pRow("invoice_id", true, `The Zoho Books invoice ID for which the URLs are required, for example <code>1528435000000281002</code>. Use the <code>invoice_id</code> stored by Mazad when the invoice was created.`)])}
            <h4 class="mini reveal">Response</h4>
            ${codeBlock("9.1.1 Successful Response", "SUCCESS", INVOICE_LINK_RESPONSE)}
            <h4 class="mini reveal">Response fields</h4>
            <div class="tbl-wrap reveal"><table><thead><tr><th>Response Field</th><th>Description</th></tr></thead><tbody>
              ${rRow("code", "Operation status code. <code>0</code> indicates success. The same code is repeated inside the <code>response</code> object.")}
              ${rRow("message", "Operation result message, <code>success</code> at the top level and <code>Success</code> inside the <code>response</code> object.")}
              ${rRow("response.view_url", "Hosted URL that opens the invoice PDF in the browser. Use it when the invoice should be displayed to the user.")}
              ${rRow("response.download_url", "The same hosted PDF with <code>?download=true</code> appended, which makes the browser download the file instead of displaying it.")}
              ${rRow("response.invoice_id", "The Zoho Books invoice ID the URLs were generated for, echoed back from the request.")}
            </tbody></table></div>
            <h4 class="mini reveal">Choosing between the two URLs</h4>
            <div class="tbl-wrap reveal"><table><thead><tr><th>URL</th><th>Behaviour</th><th>Use it for</th></tr></thead><tbody>
              <tr><td><code>view_url</code></td><td>Opens the invoice PDF inline in the browser or PDF viewer.</td><td>A &ldquo;View invoice&rdquo; link or button in the Mazad UI, or an inline preview.</td></tr>
              <tr><td><code>download_url</code></td><td>Serves the same PDF as a file download (<code>?download=true</code>).</td><td>A &ldquo;Download invoice&rdquo; action, or attaching/saving the PDF.</td></tr>
            </tbody></table></div>
            ${callout("info", "Both URLs serve the same PDF", "<code>view_url</code> and <code>download_url</code> address the same hosted invoice PDF; they differ only by the <code>download=true</code> query parameter. Mazad does not need to call the API twice &mdash; a single call returns both.")}
            ${callout("info", "Invoice URL usage", "After receiving the URLs, Mazad can store them against the invoice record, or present them to the relevant user/customer as required by the integration. Because the invoice PDF is hosted, no access token is needed to open either URL.")}
            ${callout("warn", "Hosted environment", "The URLs returned in this Sandbox integration are served from the Catalyst <b>development</b> environment (<code>&hellip;development.catalystserverless.com</code>). The host portion of the URL will differ in production, so always use the URL exactly as returned by the API rather than constructing it in Mazad.")}
          </article>

          <section class="chunk" id="flow" data-title="Recommended Integration Flow" data-group="Integration Guide" data-spy="flow">
            ${sec("10", "Recommended Integration Flow", "flow")}
            <p class="reveal">The following sequence summarizes the intended interaction between Mazad and the Zoho Books integration.</p>
            <div class="flow">
              ${step(1, "Retrieve customers", "Call Get Customers and use pagination to retrieve the required customer data.", "#ep-get-customers")}
              ${step(2, "Map the customer", "Use the Mazad customer ID as <code>mazad_user_id</code> and the Mazad asset owner ID as <code>mazad_asset_owner</code>. Keep the corresponding Zoho customer information available for future operations.")}
              ${step(3, "Create invoice", "Send the invoice payload with <code>mazad_user_id</code> and the required invoice and line-item information.", "#ep-create-invoice")}
              ${step(4, "Store invoice ID", "On successful creation, store the returned <code>invoice_id</code> in Mazad's database against the corresponding customer/transaction.")}
              ${step(5, "Retrieve invoice", "Use the stored <code>invoice_id</code> whenever the invoice needs to be retrieved or referenced.", "#ep-get-invoice")}
              ${step(6, "Generate the invoice URLs", "Pass the stored <code>invoice_id</code> to Get Invoice View &amp; Download URL, then use <code>view_url</code> to display the invoice and <code>download_url</code> to download it.", "#ep-view-url")}
              ${step(7, "Record a deposit", "When a customer pays in advance, record the money with Create Customer Deposit, passing the gateway <code>rrn</code> and the <code>channel</code>. Store the returned payment ID.", "#ep-create-deposit")}
              ${step(8, "Apply payment to invoices", "When payment is received against invoices, send the <code>channel</code>, the gateway <code>rrn</code> and one entry per invoice, with the allocations adding up to the payment <code>amount</code>.", "#ep-create-payment")}
              ${step(9, "Apply existing credit", "To settle an invoice from a deposit or an unapplied payment, pass the <code>invoice_id</code> with the <code>payment_id</code> and amount to Apply Credit to Invoice.", "#ep-apply-credit")}
              ${step(10, "Create credit note", "If a credit note is required, pass the relevant <code>invoice_id</code> dynamically in the Create Credit Note URL.", "#ep-create-credit-note")}
              ${step(11, "Refund when required", "If money has to be returned to the customer, call Refund with the original gateway <code>rrn</code> and Mazad's own <code>refund_reference</code>.", "#ep-refund")}
            </div>
          </section>

          <section class="chunk" id="rules" data-title="Key Integration Rules" data-group="Integration Guide" data-spy="rules">
            ${sec("11", "Key Integration Rules", "rules")}
            <ul class="rules">
              <li class="card reveal"><code>mazad_user_id</code> must contain the customer's ID from the Mazad database, and <code>mazad_asset_owner</code> the asset (lot) owner's ID from the Mazad database. Each must resolve to exactly one customer in Zoho Books.</li>
              <li class="card reveal">The Zoho Books Organization ID used in this documentation is <code>${ORG_ID}</code> and belongs to the Sandbox environment.</li>
              <li class="card reveal">Store the <code>invoice_id</code> returned by Create Invoice in the Mazad database. Do not rely only on <code>invoice_number</code> for future API calls.</li>
              <li class="card reveal">Every invoice line item must carry a <code>books_item_id</code> referencing an existing Zoho Books item, together with a numeric <code>rate</code> and <code>quantity</code>.</li>
              <li class="card reveal">For invoice line items, provide <code>tax_id</code> when a specific Zoho Books tax must be applied to that item. The tax is applied only to the line item where the <code>tax_id</code> is supplied.</li>
              <li class="card reveal">Tax IDs can be located in Zoho Books → Settings → Taxes by searching for the required tax.</li>
              <li class="card reveal">For customer/vendor lists, use <code>page</code> to retrieve subsequent pages and <code>per_page</code> to control the number of records per page.</li>
              <li class="card reveal"><code>customer_id</code> and <code>invoice_id</code> used by subsequent APIs should be dynamically supplied using IDs obtained from the relevant API responses or stored by Mazad.</li>
              <li class="card reveal">Create Customer Deposit requires the gateway <code>rrn</code>. If <code>channel</code> is omitted, both <code>account_id</code> and <code>mode</code> must be supplied instead.</li>
              <li class="card reveal">Apply Payment to Invoices requires both <code>channel</code> and <code>rrn</code>, and the invoice allocations must add up to exactly the payment <code>amount</code>. <code>payment_mode</code> is optional but must agree with the channel when sent.</li>
              <li class="card reveal">Store the gateway <code>rrn</code> against every deposit, payment and refund &mdash; it is the reference that ties the Zoho Books record back to the payment gateway transaction.</li>
              <li class="card reveal">Store the <code>payment_id</code> returned when a deposit or a payment is created. It is required by Apply Credit to Invoice to allocate the remaining credit to an invoice.</li>
              <li class="card reveal">Apply Credit to Invoice can only draw on unapplied credit belonging to the same customer as the invoice, and the amount cannot exceed the payment's remaining balance.</li>
              <li class="card reveal">For Create Credit Note, the <code>invoice_id</code> is supplied in the URL by the client.</li>
              <li class="card reveal">The invoice URLs are returned in the <code>view_url</code> (open in browser) and <code>download_url</code> (download as a file) fields of the Get Invoice View &amp; Download URL response. Store or use the URLs exactly as returned; do not construct them in Mazad.</li>
            </ul>
          </section>

          <section class="chunk" id="quick-reference" data-title="API Quick Reference" data-group="Integration Guide" data-spy="quick-reference">
            ${sec("12", "API Quick Reference", "quick-reference")}
            <p class="reveal">All APIs documented in this guide, grouped by category. The <b>Auth</b> column shows how each request is authenticated: <code>OAuth</code> uses the <code>Authorization: Zoho-oauthtoken</code> header, while <code>API key</code> requests carry the <code>encapiKey</code> in the URL.</p>
            <div class="tbl-wrap reveal"><table><thead><tr><th>Category</th><th>API</th><th>Method</th><th>Auth</th><th>Purpose</th></tr></thead><tbody>
              <tr><td rowspan="2">Authentication</td><td><a href="#ep-token-init">Access Token and Refresh Token</a></td><td><span class="method POST">POST</span></td><td>&mdash;</td><td>Initialize OAuth access and refresh tokens.</td></tr>
              <tr><td><a href="#ep-token-refresh">Get Access Token</a></td><td><span class="method POST">POST</span></td><td>&mdash;</td><td>Refresh the active access token.</td></tr>
              <tr><td rowspan="2">Customers &amp; Vendors</td><td><a href="#ep-get-customers">Get Customers</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Retrieve customer contacts with pagination.</td></tr>
              <tr><td><a href="#ep-get-vendors">Get Vendors</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Retrieve vendor contacts with pagination.</td></tr>
              <tr><td rowspan="5">Invoices</td><td><a href="#ep-get-invoices">Get Invoices</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Retrieve invoices for the organization.</td></tr>
              <tr><td><a href="#ep-customer-invoices">Get Customer Invoices</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Retrieve invoices for a customer.</td></tr>
              <tr><td><a href="#ep-get-invoice">Get Invoice</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Retrieve a specific invoice by invoice ID.</td></tr>
              <tr><td><a href="#ep-create-invoice">Create Invoice</a></td><td><span class="method POST">POST</span></td><td>API key</td><td>Create an invoice from Mazad information.</td></tr>
              <tr><td><a href="#ep-get-invoice-pdf">Get Invoice PDF</a></td><td><span class="method GET">GET</span></td><td>OAuth</td><td>Download an invoice as a PDF file.</td></tr>
              <tr><td rowspan="4">Payments</td><td><a href="#ep-create-deposit">Create Customer Deposit</a></td><td><span class="method POST">POST</span></td><td>API key</td><td>Record an advance customer deposit.</td></tr>
              <tr><td><a href="#ep-create-payment">Apply Payment to Invoices</a></td><td><span class="method POST">POST</span></td><td>API key</td><td>Create a payment and apply it to invoice(s).</td></tr>
              <tr><td><a href="#ep-apply-credit">Apply Credit to Invoice</a></td><td><span class="method POST">POST</span></td><td>API key</td><td>Apply an existing payment/credit to an invoice.</td></tr>
              <tr><td><a href="#ep-refund">Refund</a></td><td><span class="method POST">POST</span></td><td>API key</td><td>Refund an amount from the customer's available credit.</td></tr>
              <tr><td>Credit Notes</td><td><a href="#ep-create-credit-note">Create Credit Note</a></td><td><span class="method POST">POST</span></td><td>OAuth</td><td>Create a credit note against an invoice.</td></tr>
              <tr><td>Invoice URLs</td><td><a href="#ep-view-url">Get Invoice View &amp; Download URL</a></td><td><span class="method GET">GET</span></td><td>API key</td><td>Generate the hosted view and download URLs for an invoice.</td></tr>
            </tbody></table></div>
            <h4 class="mini reveal">Where the IDs come from</h4>
            <p class="reveal">Most requests are chained together by IDs returned from an earlier call. The table below summarizes which API produces each ID and which APIs consume it.</p>
            <div class="tbl-wrap reveal"><table><thead><tr><th>ID</th><th>Produced by</th><th>Used by</th></tr></thead><tbody>
              <tr><td><code>customer_id</code></td><td><a href="#ep-get-customers">Get Customers</a></td><td><a href="#ep-customer-invoices">Get Customer Invoices</a>, <a href="#ep-create-credit-note">Create Credit Note</a></td></tr>
              <tr><td><code>invoice_id</code></td><td><a href="#ep-create-invoice">Create Invoice</a>, <a href="#ep-get-invoices">Get Invoices</a></td><td><a href="#ep-get-invoice">Get Invoice</a>, <a href="#ep-get-invoice-pdf">Get Invoice PDF</a>, <a href="#ep-create-payment">Apply Payment to Invoices</a>, <a href="#ep-apply-credit">Apply Credit to Invoice</a>, <a href="#ep-create-credit-note">Create Credit Note</a>, <a href="#ep-view-url">Get Invoice View &amp; Download URL</a></td></tr>
              <tr><td><code>payment_id</code></td><td><a href="#ep-create-deposit">Create Customer Deposit</a>, <a href="#ep-create-payment">Apply Payment to Invoices</a></td><td><a href="#ep-apply-credit">Apply Credit to Invoice</a></td></tr>
              <tr><td><code>rrn</code></td><td>The payment gateway</td><td><a href="#ep-create-deposit">Create Customer Deposit</a>, <a href="#ep-create-payment">Apply Payment to Invoices</a>, <a href="#ep-refund">Refund</a></td></tr>
              <tr><td><code>books_item_id</code></td><td>Zoho Books &rarr; Items</td><td><a href="#ep-create-invoice">Create Invoice</a> line items</td></tr>
              <tr><td><code>tax_id</code></td><td>Zoho Books &rarr; Settings &rarr; Taxes</td><td><a href="#ep-create-invoice">Create Invoice</a> line items</td></tr>
              <tr><td><code>account_id</code></td><td>Zoho Books &rarr; Chart of Accounts</td><td><a href="#ep-create-deposit">Create Customer Deposit</a></td></tr>
            </tbody></table></div>
          </section>

          <footer><span>© Mazad × Zoho Books · Client API Documentation</span><span>Version 1.0 · October 2026</span></footer>
        </div>
      </main>
    </div>
    <button class="to-top" id="toTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg></button>
    <div class="modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Search">
      <div class="sbox">
        <div class="sinput"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg><input id="sInput" type="text" placeholder="Search endpoints, fields, topics…" autocomplete="off" spellcheck="false" /><kbd>Esc</kbd></div>
        <div class="results" id="results"></div>
        <div class="sfoot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>Esc</kbd> close</span></div>
      </div>
    </div>
  `;

export default documentationMarkup;
