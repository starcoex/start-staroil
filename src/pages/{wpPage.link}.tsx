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

const features = [
  {
    name: "Only 수도물",
    description: "절대 변하지 않는 원칙이며, 안심하고 이용해도 무방합니다.",
  },
  {
    name: "아주 쎈 고압세척기",
    description:
      "기본 고압세척기로는 고착된 이물질이 세척이 불가능하지만, 별표주유소는 기본 250bar 이상이 압력으로 세척을 합니다.",
  },
  {
    name: "세차 전용카드",
    description:
      "세차 전용카드 하나로 모든 서비스를 이용 할수 있으며, 세차 전용카드을 사용하면 더 많은 적립 서비스를 드리고 있습니다.",
  },
  {
    name: "소낙스 전용 버블세제",
    description:
      "전세게 인정받은 소낙스 세제만을 사용하고 있으며, 풍성한 거품이 가득합니다.",
  },
];

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
