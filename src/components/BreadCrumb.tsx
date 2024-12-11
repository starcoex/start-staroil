import React from "react";
import { Link } from "gatsby";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "./FadeIn";

interface BreadCrumbProps {
  parent: { id?: string; title: string; uri: string };
}

const BreadCrumb = ({ parent }: BreadCrumbProps) => {
  return (
    <div className="flex flex-wrap items-center">
      <FadeIn>
        <nav aria-label="Breadcrumb" className="flex">
          <ol
            role="list"
            className="flex space-x-4 rounded-md bg-white px-6 shadow"
          >
            <li className="flex">
              <div className="flex items-center">
                <Link to="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon aria-hidden="true" className="size-4 shrink-0" />

                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            {parent ? (
              <li className="flex">
                <div className="flex items-center">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32 44"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="h-full w-6 shrink-0 text-gray-200"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <Link
                    to={parent.uri!}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: parent.title! }}
                      className="mr-1 font-bold"
                    />
                  </Link>
                </div>
              </li>
            ) : null}
          </ol>
        </nav>
      </FadeIn>
    </div>
  );
};

export default BreadCrumb;
