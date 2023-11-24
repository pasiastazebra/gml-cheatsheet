import Nav from "react-bootstrap/Nav";

function PageNavbar() {
  return (
    <Nav variant="pills" defaultActiveKey="variables" className="flex-column">
      <Nav.Link eventKey="variables">Variables</Nav.Link>
      <Nav.Link eventKey="arrays">Arrays</Nav.Link>
      <Nav.Link eventKey="objects">Objects</Nav.Link>
      <Nav.Link eventKey="functions">Functions</Nav.Link>
      <Nav.Link eventKey="operators">Operators</Nav.Link>
      <Nav.Link eventKey="loops">Loops</Nav.Link>
      <Nav.Link eventKey="ifs">if, else, switch</Nav.Link>
    </Nav>
  );
}

export default PageNavbar;
