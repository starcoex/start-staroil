import React from "react";
import Container from "./Container";
import { StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { options } from "../lib/style-parser";
import { Link } from "gatsby";
import { PageContext } from "gatsby/internal";
import { FadeIn } from "./FadeIn";

interface FeaturePostsProps {
  pageContext: PageContext;
  data: Queries.WpPagePostQuery;
}

const FeaturePosts = ({ pageContext, data }: FeaturePostsProps) => {
  const { allWpPost } = data;
  const { catId, catName, catUri, numPages, currentPage, categories } =
    pageContext;
  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">최신 블로그</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {allWpPost.edges.slice(0, 3).map((post, index) => (
              <div className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5">
                <StaticImage
                  src="../images/blog_main.jpg"
                  alt=""
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <div className="flex flex-1 flex-col p-8">
                  <div className="text-sm/5 text-gray-700">
                    {parse(post.node.date!, options)}
                  </div>
                  <div className="mt-2 text-base/7 font-medium">
                    <Link to={`/blog/${post.node.uri}`}>
                      <span className="absolute inset-0" />
                      {parse(post.node.title!, options)}
                    </Link>
                  </div>
                  <div
                    className="mt-2 flex-1 text-sm/6 text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: post.node.excerpt!,
                    }}
                  />
                  {post.node.author && (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="text-sm/5 text-gray-700">
                        {parse(post.node.author.node.name!, options)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default FeaturePosts;
