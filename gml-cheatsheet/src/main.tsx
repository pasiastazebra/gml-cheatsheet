import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PageContent from "./PageContent.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <PageContent />
  </React.StrictMode>
);
