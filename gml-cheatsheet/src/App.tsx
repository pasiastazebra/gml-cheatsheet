/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const innerCode = `//javascript
const a = 1;
  const b = 2;
    const c = 3;
`;

function App() {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <pre>
        <code className="language-javascript">{innerCode}</code>
      </pre>
    </>
  );
}

export default App;
