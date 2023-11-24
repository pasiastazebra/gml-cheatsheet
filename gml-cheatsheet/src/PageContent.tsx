import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

function PageContent({ pageTitle, jsDesc, jsCode }) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>{jsDesc}</p>
      <pre>
        <code className="language-javascript">{jsCode}</code>
      </pre>
    </div>
  );
}

export default PageContent;
