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
    pageTitle: "Placeholder",
    jSide: {
      title: "Placeholder test js",
      desc: "Placeholder desc",
      code: `//Placeholder test`,
    },
    gmlSide: {
      title: "Placeholder test gml",
      desc: "Placeholder desc",
      code: `//Placeholder test gml`,
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
