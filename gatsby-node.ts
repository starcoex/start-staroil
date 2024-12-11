import { GatsbyNode } from "gatsby";
import path from "node:path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const BlogTemplate = path.resolve("./src/templates/Blog.tsx");
  const result = await graphql(`
    query BlogPages {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while fetching blog posts.", result.errors);
    return;
  }

  const { wp, allWpCategory } = result.data;
  allWpCategory.edges.forEach((category) => {
    const postsPerPage = wp.readingSettings.postsPerPage;
    const numberOfPosts = category.node.count;
    const numPages = Math.ceil(numberOfPosts / postsPerPage);

    // Some categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized

    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? category.node.uri : `${category.node.uri}${i + 1}`,
          component: BlogTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        });
      });
    }
  });
};
