import * as React from "react";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        slug
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

const Essays = ({ data }) => {
  return (
    <div>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
      </div>

      <div>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, slug }) => (
          <>
            <Link to={slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Essays;
