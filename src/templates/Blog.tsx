import React from "react";
import { PageContext } from "gatsby/internal";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Heading, Lead, Subheading } from "../components/Text";
import Container from "../components/Container";
import { StaticImage } from "gatsby-plugin-image";
import dayjs from "dayjs";
import Navbar from "../components/Navbar";
import { GradientBackground } from "../components/Gradient";
import parse from "html-react-parser";
import { options } from "../lib/style-parser";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import BreadCrumb from "../components/BreadCrumb";
import SideBar from "../components/SideBar";
import FeaturePosts from "../components/FeaturePosts";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { FadeIn } from "../components/FadeIn";
import Seo from "../components/SEO";

interface BlogTemplateProps {
  pageContext: PageContext;
  data: Queries.WpPagePostQuery;
}

const Blog = ({ pageContext, data }: BlogTemplateProps) => {
  const { allWpPost } = data;
  const { catId, catName, catUri, numPages, currentPage, categories } =
    pageContext;
  return (
    <main className="overflow-hidden">
      <Seo title="블로그" />
      <Layout>
        <Container>
          <FadeIn>
            <Subheading className="mt-10">블로그</Subheading>
            <Heading as="h1" className="mt-2">
              최신 소식을 전해드립니다.
            </Heading>
            <Lead className="mt-6 max-w-3xl">
              블로그 업데이트, 이벤트 관련 다양한 최신 정보를 받아보세요!
            </Lead>
          </FadeIn>
        </Container>
        {currentPage === 1 && (
          <FeaturePosts data={data} pageContext={pageContext} />
        )}
        <Container className="mt-16 pb-24">
          <BreadCrumb parent={{ uri: "/blog/all-posts", title: "blog" }} />
          <Posts
            data={data}
            catName={catName}
            pageContext={pageContext}
            catId={catId}
          />
          <Pagination pageContext={pageContext} />
        </Container>
      </Layout>
    </main>
  );
};

export default Blog;

export const query = graphql`
  query WpPagePost(
    $skip: Int = 10
    $limit: Int = 10
    $catId: String
    $difference: String = ""
    $locale: String = ""
  ) {
    allWpPost(
      skip: $skip
      limit: $limit
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(
            formatString: "YYYY-MM-DD"
            fromNow: true
            difference: $difference
            locale: $locale
          )
          author {
            node {
              name
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`;
