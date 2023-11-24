import PageSide from "./PageSide";

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
    <div>
      <h1>{pageTitle}</h1>
      <PageSide title={jSide.title} code={jSide.code} />
      <PageSide title={gmlSide.title} code={gmlSide.code} />
    </div>
  );
}

export default PageContent;
