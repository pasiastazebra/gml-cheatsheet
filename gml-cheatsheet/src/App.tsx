import { useState } from "react";

import PageContent from "./PageContent.tsx";
import PageNavbar from "./PageNavbar.tsx";

function App() {
  interface PageContent {
    pageTitle: string;
    jSide: { title: string; desc: string; code: string };
    gmlSide: { title: string; desc: string; code: string };
  }

  const placeholder = {
    pageTitle: "Variables",
    jSide: {
      title: "JavaScript",
      desc: "Variables can be declared using 'var' or 'let' keyword. You can also declare constances using 'const' declaration. You have to declare variable.",
      code: `
      //variables in js
      var a = 1;
      let b = 2;

      const c = a + b;

      xyz = 'hey'; //<--this code is invalid
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Variables in GML can be declared only using 'var' keyword, hovewer it is possible (but not recommended) to assign value without declaration. You can also declare constants using '#macro' keyword. ",
      code: `
      //variables in GML
      var a = 1;
      b = 2;
      #macro c = a + b;
      `,
    },
  };

  const [pageContent, setPageContent] = useState(placeholder);

  const handlePageChange = (value: PageContent) => {
    setPageContent(value);
  };
  const pageTitle: string = pageContent.pageTitle;
  const jSide = pageContent.jSide;
  const gmlSide = pageContent.gmlSide;

  return (
    <div id="App">
      <PageNavbar onNavClick={handlePageChange} />
      <PageContent pageTitle={pageTitle} jSide={jSide} gmlSide={gmlSide} />
    </div>
  );
}

export default App;
