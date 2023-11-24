import { useEffect } from "react";
import hljs from "highlight.js";
import Card from "react-bootstrap/Card";

import "highlight.js/styles/hybrid.css";
import "./pageside.css";

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
      <Card className="page-side-card">
        <Card.Header className="page-side-card-title">{title}</Card.Header>
        <div className="page-side-card-wrapper">
          <Card.Text className="page-side-card-description">
            description placeholder
          </Card.Text>
          <Card.Text>
            <pre>
              <code>{code}</code>
            </pre>
          </Card.Text>
        </div>
      </Card>
    </div>
  );
}

export default PageSide;
