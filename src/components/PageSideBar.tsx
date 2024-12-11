import React from "react";
import PageIcon from "../images/page-icon.svg";
import { Link } from "gatsby";
import SidebarMessage from "./SidebarMessage";

interface IPageSideBarProps {
  data: Queries.PageDataQuery;
}

const PageSideBar = ({ data }: IPageSideBarProps) => {
  console.log(data);
  return (
    <>
      <div className="flex items-center">
        <img
          src={PageIcon}
          alt="CarWash Page"
          className="w-5 h-5 flex-shrink-0"
        />
        {/*<span*/}
        {/*  dangerouslySetInnerHTML={{ __html: currentPage.title }}*/}
        {/*  className="ml-2 text-sm text-gray-900 uppercase"*/}
        {/*/>*/}
      </div>
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full  border-t border-gray-300 " />
        </div>
      </div>
      {!data.wpPage?.wpParent && (
        <>
          {data?.wpPage?.wpChildren?.nodes.map((child) => (
            <div key={child.id} className="mt-1">
              <Link to={child.uri} activeClassName="font-bold">
                <span
                  dangerouslySetInnerHTML={{ __html: child.title }}
                  className="text-sm text-gray-900 uppercase"
                />
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default PageSideBar;
