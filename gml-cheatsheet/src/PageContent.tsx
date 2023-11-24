import PageSide from "./PageSide";
import "./pagecontent.css";

interface PageSideObjectProps {
  title: string;
  code: string;
}
interface PageContentProps {
  pageTitle: string;
  jSide: PageSideObjectProps;
  gmlSide: PageSideObjectProps;
}

function PageContent({ pageTitle, jSide, gmlSide }: PageContentProps) {
  return (
    <div className="page-content">
      <h1>{pageTitle}</h1>
      <div className="page-content-articles">
        <PageSide title={jSide.title} code={jSide.code} />
        <PageSide title={gmlSide.title} code={gmlSide.code} />
      </div>
    </div>
  );
}

export default PageContent;
