import { graphql, useStaticQuery } from "gatsby";

const useMenuQuery = () => {
  return useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                url
                id
                label
              }
            }
          }
        }
      }
    }
  `);
};

export default useMenuQuery;
