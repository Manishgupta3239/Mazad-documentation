import { useEffect } from "react";
import documentationMarkup from "./documentationMarkup.js";
import { initializeDocumentationInteractions } from "./documentationInteractions.js";
import "../documentation.css";

function DocumentationPage({ onSignOut }) {
  useEffect(
    () => initializeDocumentationInteractions(onSignOut),
    [onSignOut],
  );

  return (
    <div
      className="reference-document"
      dangerouslySetInnerHTML={{ __html: documentationMarkup }}
    />
  );
}

export default DocumentationPage;
