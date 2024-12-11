import { graphql, useStaticQuery } from "gatsby";

export const useQuoteQuery = () => {
  return useStaticQuery<Queries.QuoteQueryQuery>(graphql`
    query QuoteQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          citat1Author
          citat1Text
        }
      }
    }
  `);
};
