import React from "react";
import ReactDOM from "react-dom/client";
import PageContent from "./PageContent.tsx";
import PageNavbar from "./PageNavbar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./index.css";

const pageTitle: string = "Page title test";
const jSide = {
  title: "Javascript title",
  code: `const function = () => return true;`,
};
const gmlSide = {
  title: "GML title",
  code: `//i have no idea how does GML code looks like`,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageNavbar />
    <PageContent pageTitle={pageTitle} jSide={jSide} gmlSide={gmlSide} />
  </React.StrictMode>
);
