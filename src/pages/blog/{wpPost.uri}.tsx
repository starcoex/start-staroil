import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";
import SideBar from "../../components/SideBar";
import React from "react";
import { Heading, Subheading } from "../../components/Text";
import { UserIcon } from "@heroicons/react/16/solid";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Button } from "../../components/Button";
import Seo from "../../components/SEO";

interface PostTemplateProps {
  data: Queries.PostDataQuery;
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const { wpPost } = data;
  return (
    <Layout>
      <Seo title={wpPost?.title!} />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Subheading className="mt-16">
          <span
            dangerouslySetInnerHTML={{ __html: wpPost?.date! }}
            className="text-xs text-gray-900 uppercase"
          />
        </Subheading>
        <Heading as="h1" className="mt-2">
          {wpPost?.title!}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {wpPost?.author && (
              <div className="flex items-center gap-3">
                <UserIcon className="aspect-square size-6 rounded-full object-cover" />
                <div className="text-sm/5 text-gray-700">
                  {wpPost.author.node.name}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3">
              <span className="text-xs text-gray-900 uppercase">분류</span>

              {wpPost?.categories?.nodes.map((category) =>
                category.slug !== "all-posts" ? (
                  <Link
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                    to={category.uri!}
                    key={category.id}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: category?.name! }}
                      className="text-xs text-gray-500 uppercase"
                    />
                  </Link>
                ) : null
              )}
            </div>
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: wpPost?.content! }}
              />
            </div>
            <div className="mt-10">
              <Link to={"/blog/all-posts"}>
                <Button variant="outline">
                  <ChevronLeftIcon className="size-4" />
                  블로그로 이동
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostData($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "YYYY MM DD")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`;
