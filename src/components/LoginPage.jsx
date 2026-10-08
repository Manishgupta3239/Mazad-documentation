import { useLayoutEffect, useState } from "react";
import "../login.css";

const VALID_USERNAME = import.meta.env.VITE_DOCS_USERNAME ?? "";
const VALID_PASSWORD = import.meta.env.VITE_DOCS_PASSWORD ?? "";
const THEME_STORAGE_KEY = "mazad-docs-theme";

function LoginPage({ onAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still changes for this session if storage is unavailable.
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const usernameMatches = username.trim() === VALID_USERNAME;
    const passwordMatches = password === VALID_PASSWORD;

    if (!usernameMatches || !passwordMatches) {
      setHasError(true);
      return;
    }

    setHasError(false);
    onAuthenticated();
  }

  return (
    <main className="login-view">
      <div className="page-shell">
        <section className="login-card" aria-labelledby="login-title">
          <div className="login-card-header">
            <div className="brand-mark" aria-hidden="true">M</div>
            <button
              className="login-theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " theme"}
              title={"Switch to " + (theme === "dark" ? "light" : "dark") + " theme"}
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
              <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
            </button>
          </div>
          <p className="eyebrow">MAZAD DOCUMENTATION</p>
          <h1 id="login-title">Welcome back</h1>
          <p className="intro">Sign in to continue to the documentation.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                aria-invalid={hasError}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={hasError}
                required
              />
            </div>

            <p className="message" role="status" aria-live="polite">
              {hasError ? "The username or password is incorrect. Please try again." : ""}
            </p>
            <button type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="card-footer">Authorized access only</p>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
