import { graphql, useStaticQuery } from "gatsby";

const useLatestBlogPostQuery = () => {
  return useStaticQuery<Queries.LatestBlogPostQuery>(graphql`
    query LatestBlogPost {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            excerpt
            slug
            uri
            title
          }
        }
      }
    }
  `);
};
export default useLatestBlogPostQuery;
