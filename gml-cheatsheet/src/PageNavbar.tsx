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

  const arraysOption = {
    pageTitle: "Arrays",
    jSide: {
      title: "JavaScript",
      desc: "Arrays can store values and methods.",
      code: `
      //arrays in js
      const arr = [1, 2, 3, () => { return(4); }];

      console.log(arr[3]()); //4
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Arrays can store values and methods aswell.",
      code: `
      //arrays in GML
      var myArray = [
        "String",
        123,
        function() { return(true); }
      ];
      `,
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
    
      console.log(obj.logInfo()); // ['cube', 'solid',
                                  //  {color: 'red',
                                  //   size: [ 10, 10, 10 ] } ]
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Objects can store variables, arrays, methods and other objects aswell.",
      code: `//objects in GML
      var obj = {
        objName: "cube",
        objType: "solid",
        objProperties: {
          color: "red",
          size: [10, 10, 10]
        },
        logInfo: function() {
            return [self.objName, self.objType, self.objProperties];
        }
      }
    
      show_debug_message(obj.logInfo()); // ['cube', 'solid',
                                         //  {color: 'red',
                                         //   size: [ 10, 10, 10 ] } ]
      `,
    },
  };

  const functionsOption = {
    pageTitle: "Objects",
    jSide: {
      title: "JavaScript",
      desc: "Functions in JavaScript can be declared using 'function()' keyword, or using arrow function method.",
      code: `
      //functions in js

      //using function keyword
      const add = function(a, b) {
        return a + b;
      }

      //arrow function
      const add = (a, b) => {
        return a + b;
      }
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Functions in GML can be declared only using 'function()' keyword.",
      code: `
      //functions in GML
      
      var add = function (a, b) {
        return a + b;
      }
      `,
    },
  };

  const operatorsOption = {
    pageTitle: "Objects",
    jSide: {
      title: "JavaScript",
      desc: "Operators:",
      code: `
      //operators in js
      let operators;

      //aritmetic operators
      operators = [+, -, *, **, /, %, ++, --];

      //assignment operators
      operators = [=, +=, -=, *=, **=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=];

      //comparison operators
      operators = [==, ===, !=, !==, >, <, >=, <=];

      //logical operators
      operators = [&&, ||, !];

      //bitwise operators
      operators = [~, &, |, ^, <<, >>, >>>];

      //ternary operator
      operators = [? :];
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Operators:",
      code: `
      //operators in GML
      var operators;

      //aritmetic operators
      operators = [+, -, *, /, mod, ++, --];

      //assignment operators
      operators = [=, +=, -=, *=, /=];

      //comparison operators |->in theory you can use '=' in comparison, hovewer it's not recommended <-|
      operators = [==, !=, >, <, >=, <=];

      //logical operators
      operators = [&&, ||, !];

      //bitwise operators
      operators = [ &, |, ^, <<, >>];

      //ternary operator
      operators = [? :];
      `,
    },
  };

  const loopsOption = {
    pageTitle: "Loops",
    jSide: {
      title: "JavaScript",
      desc: "JavaScript offers for, for in, for of and while loop.",
      code: `
      //loops in js
      
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
      //
      const numbers = [1, 2, 3];
      for (let number of numbers) {
        console.log(number);
      }
      //
      while (true) {
        console.log('hello');
        break;
      }
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "GML offerst for and while loop aswell.",
      code: `
      //loops in GML
      
      for (var i = 0; i < 10; i++) {
        console.log(i);
      }

      while (true) {
        show_debug_message("hello");
        break;
      }
      `,
    },
  };

  const ifsOption = {
    pageTitle: "If, else and swtich statements",
    jSide: {
      title: "JavaScript",
      desc: "Code:",
      code: `
      //if, else & switch in js
      
      if (true) {
        console.log('true');
      }
      else {
        console.log('false');
      }
      //
      switch (x) {
        case 1:
          console.log('1');
          break;
        case 2:
          console.log('2');
          break;
        default:
          console.log('default');
          break;
      }
      `,
    },
    gmlSide: {
      title: "GML",
      desc: "Code is exactly the same:",
      code: `
      //if, esle & switch in GML
      
      if (true) {
        show_debug_message("true");
      }
      else {
        show_debug_message("false");
      }
      //
      switch (x) {
        case 1:
          show_debug_message("1");
          break;
        case 2:
          show_debug_message("2");
          break;
        default:
          show_debug_message("default");
          break;
      }
      `,
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
        <Nav.Link
          eventKey="functions"
          onClick={() => handleClick(functionsOption)}
        >
          Functions
        </Nav.Link>
        <Nav.Link
          eventKey="operators"
          onClick={() => handleClick(operatorsOption)}
        >
          Operators
        </Nav.Link>
        <Nav.Link eventKey="loops" onClick={() => handleClick(loopsOption)}>
          Loops
        </Nav.Link>
        <Nav.Link eventKey="ifs" onClick={() => handleClick(ifsOption)}>
          if, else, switch
        </Nav.Link>
        <p className="credits">
          Made with 💚 by{" "}
          <a href="https://github.com/pasiastazebra" className="credits-link">
            Konrad
          </a>
        </p>
      </div>
    </Nav>
  );
}

export default PageNavbar;
