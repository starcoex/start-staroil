import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadataQuery";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const Seo = ({ title, description, pathname, children }: SEOProps) => {
  const data = useSiteMetadata();
  const seo = {
    title: title || data?.title,
    description: description || data?.title,
    url: `${data?.siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description!} />
      <meta name="title" content={seo.title!} />
      <meta name="url" content={seo.url} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};

export default Seo;
