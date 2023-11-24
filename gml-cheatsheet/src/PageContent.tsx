import PageSide from "./PageSide";
import "./pagecontent.css";

interface PageSideObjectProps {
  title: string;
  desc: string;
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
        <PageSide title={jSide.title} desc={jSide.desc} code={jSide.code} />
        <PageSide
          title={gmlSide.title}
          desc={gmlSide.desc}
          code={gmlSide.code}
        />
      </div>
    </div>
  );
}

export default PageContent;
