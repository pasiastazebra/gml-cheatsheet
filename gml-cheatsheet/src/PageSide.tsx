import Highlight from "react-highlight";
import Card from "react-bootstrap/Card";

import "highlight.js/styles/hybrid.css";
import "./pageside.css";

interface Props {
  title: string;
  desc: string;
  code: string;
}

function PageSide({ title, desc, code }: Props) {
  return (
    <div className="page-side">
      <Card className="page-side-card">
        <Card.Header className="page-side-card-title">{title}</Card.Header>
        <div className="page-side-card-wrapper">
          <Card.Text className="page-side-card-description">{desc}</Card.Text>
          <Card.Text>
            <Highlight className="language-javascript">{code}</Highlight>
          </Card.Text>
        </div>
      </Card>
    </div>
  );
}

export default PageSide;
