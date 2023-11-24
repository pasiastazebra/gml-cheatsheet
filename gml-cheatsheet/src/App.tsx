import PageContent from "./PageContent.tsx";
import PageNavbar from "./PageNavbar.tsx";

function App() {
  const pageTitle: string = "Page title test";
  const jSide = {
    title: "Javascript title",
    code: `const function = () => return true;`,
  };
  const gmlSide = {
    title: "GML title",
    code: `//i have no idea how does GML code looks like`,
  };
  return (
    <div id="App">
      <PageNavbar />
      <PageContent pageTitle={pageTitle} jSide={jSide} gmlSide={gmlSide} />
    </div>
  );
}

export default App;
