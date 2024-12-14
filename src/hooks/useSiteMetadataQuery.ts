import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.SEOMetadataQueryQuery>(graphql`
    query SEOMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return data.site?.siteMetadata;
};
