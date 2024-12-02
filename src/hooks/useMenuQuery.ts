import { graphql, useStaticQuery } from "gatsby";

const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
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
  return data;
};

export default useMenuQuery;
