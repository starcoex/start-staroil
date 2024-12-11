import { graphql, useStaticQuery } from "gatsby";

export const useCTAAreaQuery = () => {
  return useStaticQuery<Queries.CTAQueryQuery>(graphql`
    query CTAQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta4Link
          cta4Text
          cta1Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
          cta2Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
          cta3Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
          cta4Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);
};
