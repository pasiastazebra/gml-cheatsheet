import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

interface Props {
  title: string;
  code: string;
}

function PageSide({ title, code }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="page-side">
      <h3>{title}</h3>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default PageSide;
