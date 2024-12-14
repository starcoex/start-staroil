import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Seo from "../components/SEO";
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
        <p className="text-base/8 font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          페이지가 없습니다!
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          죄송합니다, 찾으시는 페이지를 찾을 수 없습니다.{" "}
        </p>
        <div className="mt-10">
          <Link to="/" className="text-sm/7 font-semibold text-indigo-600">
            <span aria-hidden="true">&larr;</span> 홈으로...
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Page not found" />;
