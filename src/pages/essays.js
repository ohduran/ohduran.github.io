import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import DefaultLayout from "../layouts/Default"
import PageTitle from "../components/PageTitle"
import PageSubTitle from "../components/PageSubTitle"

const Essays = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <DefaultLayout>
      <PageTitle title="Ensayos" />
      <ul className="mt-2 w-11/12 mx-auto">
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, description } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <li>
              <Link
                className="no-underline hover:underline"
                to={`/essays/${slug}`}
              >
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {title}
                </h2>
              </Link>
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-nord-3">
                {description}
              </h3>
            </li>
          )
        })}
      </ul>
    </DefaultLayout>
  )
}

export default Essays
