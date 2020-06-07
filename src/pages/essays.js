import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import DefaultLayout from "../layouts/Default"
import PageTitle from "../components/PageTitle"

const Essays = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              title
              heroImage
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
    <DefaultLayout title="Ensayos">
      <PageTitle title="Ensayos" />
      <ul className="mt-2 w-11/12 mx-auto">
        {data.allMarkdownRemark.edges.map((edge) => {
          const { title, description, heroImage } = edge.node.frontmatter
          const { slug } = edge.node.fields
          return (
            <>
              <li className="mt-5 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <Link className="no-underline" to={`/essays/${slug}`}>
                  <div className="bg-nord-1 w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 mx-auto antialiased shadow-xl rounded-lg overflow-hidden">
                    <img
                      className="-mt-1 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 w-full object-cover"
                      src={heroImage}
                      alt={`Hero ${title}`}
                    />
                    <div className="p-6">
                      {/* 
                      <div className="flex items-baseline">
                        <span className="bg-teal-200 text-teal-700 text-xs uppercase font-semibold tracking-wide px-2 rounded-full inline-block">
                          New
                        </span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                          Venice · Italy
                        </div>
                      </div>
                      */}
                      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-nord-13">
                        {title}
                      </h2>
                      <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-nord-9">
                        {description}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          )
        })}
      </ul>
    </DefaultLayout>
  )
}

export default Essays
