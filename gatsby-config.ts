import type { GatsbyConfig } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `스타코엑스`,
    description: "제주도 최고에 스티코엑스 홈페이지에 오신걸 환영합니다.",
    siteUrl: `https://www.starcoex.co.kr`,
    author: "@Ko JeongHoon",
    keyword: "주유소, 기름, 난방, 배달, 스타코엑스, 세차, 제주",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://cakeit.local/graphql",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.starcoex.co.kr",
        sitemap: "https://www.starcoex.co.kr/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Noto Sans KR`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};

export default config;
