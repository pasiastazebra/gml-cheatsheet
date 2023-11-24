import Nav from "react-bootstrap/Nav";
import "./navbar.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PageNavbar({ onNavClick }: any) {
  const handleClick = (value: object) => {
    onNavClick(value);
  };

  const variablesOption = {
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
      title: "Variables test gml",
      desc: "Variable test desc",
      code: `//Variables test gml`,
    },
  };

  const arraysOption = {
    pageTitle: "Arrays",
    jSide: {
      title: "JavaScript",
      desc: "Objects can store variables, arrays, methods and other objects.",
      code: `
      //objects in js
      const obj = {
        objName: 'cube',
        objType: 'solid',
        objProperties: {
          color: 'red',
          size: [10, 10, 10]
        },
        logInfo: function() {
            return [this.objName, this.objType, this.objProperties];
        }
      }
    
      console.log(obj.logInfo()); // ['cube', 'solid' {color: 'red', size: [ 10, 10, 10 ] } ]
      `,
    },
    gmlSide: {
      title: "Objects test gml",
      desc: "Object test desc",
      code: `//Objects test gml`,
    },
  };

  const objectsOption = {
    pageTitle: "Objects",
    jSide: {
      title: "JavaScript",
      desc: "Objects can store variables, arrays, methods and other objects.",
      code: `
      //objects in js
      const obj = {
        objName: 'cube',
        objType: 'solid',
        objProperties: {
          color: 'red',
          size: [10, 10, 10]
        },
        logInfo: function() {
            return [this.objName, this.objType, this.objProperties];
        }
      }
    
      console.log(obj.logInfo()); // ['cube', 'solid' {color: 'red', size: [ 10, 10, 10 ] } ]
      `,
    },
    gmlSide: {
      title: "Objects test gml",
      desc: "Object test desc",
      code: `//Objects test gml`,
    },
  };
  return (
    <Nav
      variant="pills"
      defaultActiveKey="variables"
      className="menu flex-column"
    >
      <p id="menuLabel">Menu</p>
      <div className="nav-wrapper">
        <Nav.Link
          eventKey="variables"
          onClick={() => handleClick(variablesOption)}
        >
          Variables
        </Nav.Link>
        <Nav.Link eventKey="arrays" onClick={() => handleClick(arraysOption)}>
          Arrays
        </Nav.Link>
        <Nav.Link eventKey="objects" onClick={() => handleClick(objectsOption)}>
          Objects
        </Nav.Link>
        <Nav.Link eventKey="functions">Functions</Nav.Link>
        <Nav.Link eventKey="operators">Operators</Nav.Link>
        <Nav.Link eventKey="loops">Loops</Nav.Link>
        <Nav.Link eventKey="ifs">if, else, switch</Nav.Link>
      </div>
    </Nav>
  );
}

export default PageNavbar;
