import React from "react";
import SideBar from "./SideBar";
import { Link } from "gatsby";
import { PageContext } from "gatsby/internal";
import { FadeIn } from "./FadeIn";

interface PostsProps {
  pageContext: PageContext;
  data: Queries.WpPagePostQuery;
  catId: string;
  catName: string;
}

const Posts = ({ data, pageContext, catId, catName }: PostsProps) => {
  const { categories } = pageContext;
  const { allWpPost } = data;

  return (
    <FadeIn>
      <div className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 max-sm:gap-3 sm:grid-cols-3">
        <div>
          <SideBar catId={catId} categories={categories} />
        </div>

        <div className="sm:col-span-2 sm:max-w-2xl">
          <h2
            dangerouslySetInnerHTML={{ __html: catName }}
            className="text-sm/5 font-medium"
          />
          {allWpPost.edges.map((post) => (
            <div
              key={post.node.id}
              className="flex space-x-4 text-sm text-gray-500"
            >
              <div className={"border-t border-gray-200 py-5"}>
                <Link to={`/blog${post.node.uri}`} className="pt-4">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.node.title! }}
                    className="font-semibold text-gray-900"
                  />
                </Link>
                <p className="text-xs pt-1">
                  <span
                    dangerouslySetInnerHTML={{ __html: post.node.date! }}
                    className="text-xs text-gray-900 uppercase"
                  />
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt! }}
                  className="mt-3 text-sm/6 text-gray-500"
                />
                <div className="mt-4">
                  <Link to={`/blog${post.node.uri}`}>
                    <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      더 보기
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Posts;
