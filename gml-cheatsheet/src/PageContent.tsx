import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import PageSide from "./PageSide";

interface PageSideObjectProps {
  title: string;
  code: string;
}
interface PageContentProps {
  pageTitle: string;
  jSide: PageSideObjectProps;
  gmlSide: PageSideObjectProps;
}

function PageContent({ pageTitle, jSide, gmlSide }: PageContentProps) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>{pageTitle}</h1>
      <PageSide title={jSide.title} code={jSide.code} />
      <PageSide title={gmlSide.title} code={gmlSide.code} />
    </div>
  );
}

export default PageContent;
