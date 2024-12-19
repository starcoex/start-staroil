import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import About from "../components/About";
import Contact from "../components/Contact";
import WashMain from "../components/WashMain";
import Seo from "../components/SEO";

interface PageTemplateProps {
  data: Queries.PageDataQuery;
}

const PageTemplate = ({ data }: PageTemplateProps) => {
  return (
    <Layout>
      <Seo title={data.wpPage?.title!} />
      {data.wpPage?.title === "소개" ? (
        <About title={data.wpPage?.title!} />
      ) : null}
      {data.wpPage?.title === "문의하기" ? (
        <Contact title={data.wpPage?.title!} />
      ) : (
        <WashMain data={data} />
      )}
    </Layout>
  );
};
export default PageTemplate;

export const pageQuery = graphql`
  query PageData($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      status
      content
      date(formatString: "YYYY MM DD")
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
            content
          }
        }
      }
    }
  }
`;
