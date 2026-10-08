import { useCallback, useState } from "react";
import "./App.css";
import DocumentationPage from "./components/DocumentationPage.jsx";
import LoginPage from "./components/LoginPage.jsx";

const AUTH_STORAGE_KEY = "mazad-docs-authenticated";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => window.sessionStorage.getItem(AUTH_STORAGE_KEY) === "true",
  );

  const handleAuthenticated = useCallback(() => {
    window.sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    setIsAuthenticated(true);
  }, []);

  const handleSignOut = useCallback(() => {
    window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <div className="app-root">
      {isAuthenticated ? (
        <DocumentationPage onSignOut={handleSignOut} />
      ) : (
        <LoginPage onAuthenticated={handleAuthenticated} />
      )}
    </div>
  );
}

export default App;
