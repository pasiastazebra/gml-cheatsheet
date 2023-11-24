import React from "react";
import ReactDOM from "react-dom/client";
import PageContent from "./PageContent.tsx";
import "./index.css";

const pageTitle: string = "Page title test";
const jsDesc: string = "JS description test";
const jsCode: string = `//JavaScript
const a = 1;
  const b = 2;
    const c = a + b;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContent pageTitle={pageTitle} jsDesc={jsDesc} jsCode={jsCode} />
  </React.StrictMode>
);
