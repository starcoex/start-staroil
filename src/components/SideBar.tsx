import React from "react";
import { Link } from "gatsby";
import PageIcon from "../images/page-icon.svg";

interface SideBarProps {
  catId: string;
  categories: {
    edges: {
      node: {
        count: number;
        id: string;
        name: string;
        slug: string;
        uri: string;
      };
    }[];
  };
}

const SideBar = ({ catId, categories }: SideBarProps) => {
  const { edges } = categories;
  const sortedCategories = [...edges].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1;
    if (x.node.slug === "all-posts") return 1;
    return 0;
  });
  return (
    <>
      <div className="flex items-center">
        <img
          src={PageIcon}
          alt="Starcoex! - Archive Header"
          className="w-5 h-5 flex-shrink-0"
        />
        <span className="ml-2 text-xs text-gray-900 uppercase">Posts</span>
      </div>
      <div className="relative py-2" />
      {sortedCategories.map((cat) => {
        if (cat.node.count !== 0) {
          return cat.node.slug !== "uncategorized" ? (
            <div key={cat.node.id} className="mt-1">
              <span className="inline-flex items-center rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 mr-2">
                {cat.node.count < 10
                  ? (cat.node.count?.toString()?.padStart(2, "0") as string)
                  : cat.node.count.toString()}
              </span>
              <Link to={cat.node.uri} activeClassName="font-bold">
                <span
                  dangerouslySetInnerHTML={{ __html: cat.node.name }}
                  className="text-xs text-gray-900 uppercase"
                />
              </Link>
            </div>
          ) : null;
        }
        return null;
      })}
    </>
  );
};

export default SideBar;
