import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/Hero";
import CtaArea from "../components/CTAArea";
import LatestBlogPost from "../components/LatestBlogPost";
import Process from "../components/Process";
import Quote from "../components/Quote";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <CtaArea />
      <LatestBlogPost />
      <Quote />
      <Process />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
