import React from "react";
import { PageContext } from "gatsby/internal";
import { Link } from "gatsby";

interface PaginationProps {
  pageContext: PageContext;
}

const Pagination = ({ pageContext }: PaginationProps) => {
  const {
    catId,
    catName,
    catUri,
    numPages: totalPages,
    currentPage: page,
    categories,
  } = pageContext;
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:scroll-px-16"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <h2 className="text-sm text-gray-700">
          <span className="font-medium">{totalPages}</span>개 결과 중
          <span className="font-medium">{page}</span> ~{" "}
          <span className="font-medium">10</span>개 표시중
        </h2>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {page > 1 ? (
          <Link
            to={`${catUri}${page === 2 ? "" : page - 1}`}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            이전
          </Link>
        ) : null}
        {page < totalPages ? (
          <Link
            to={`${catUri}${page + 1}`}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            다음
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default Pagination;
