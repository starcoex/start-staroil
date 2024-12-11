import { graphql, useStaticQuery } from "gatsby";

const useHeroQuery = () => {
  return useStaticQuery<Queries.HeroQueryQuery>(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 47 }) {
        id
        ACF_HomePage {
          heroText
          heroText1
          heroImage0 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            filename
            altText
          }
          heroImage1 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            altText
            filename
          }
          heroImage2 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            altText
            filename
          }
          heroImage3 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            altText
            filename
          }
          heroImage4 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            altText
            filename
          }
        }
      }
    }
  `);
};

export default useHeroQuery;
