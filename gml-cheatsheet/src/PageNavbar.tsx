import Nav from "react-bootstrap/Nav";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PageNavbar({ onNavClick }: any) {
  const handleClick = (value: object) => {
    onNavClick(value);
  };

  const variablesOption = {
    pageTitle: "Variables",
    jSide: {
      title: "Variables test js",
      code: `//Variables test`,
    },
    gmlSide: {
      title: "Variables test gml",
      code: `//Variables test gml`,
    },
  };

  const objectsOption = {
    pageTitle: "Objects",
    jSide: {
      title: "Objects test js",
      code: `//Objects test`,
    },
    gmlSide: {
      title: "Objects test gml",
      code: `//Objects test gml`,
    },
  };
  return (
    <Nav variant="pills" defaultActiveKey="variables" className="flex-column">
      <Nav.Link
        eventKey="variables"
        onClick={() => handleClick(variablesOption)}
      >
        Variables
      </Nav.Link>
      <Nav.Link eventKey="arrays" onClick={() => handleClick(objectsOption)}>
        Arrays
      </Nav.Link>
      <Nav.Link eventKey="objects">Objects</Nav.Link>
      <Nav.Link eventKey="functions">Functions</Nav.Link>
      <Nav.Link eventKey="operators">Operators</Nav.Link>
      <Nav.Link eventKey="loops">Loops</Nav.Link>
      <Nav.Link eventKey="ifs">if, else, switch</Nav.Link>
    </Nav>
  );
}

export default PageNavbar;
