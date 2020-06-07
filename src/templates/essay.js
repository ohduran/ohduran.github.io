import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/Default"
import PageTitle from "../components/PageTitle"
import PageSubTitle from "../components/PageSubTitle"

import "./essay.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        heroImage
      }
      html
    }
  }
`

const EssayTemplatePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <DefaultLayout className="bg-nord-6">
      <img
        className="h-40 xs:h-48 sm:h-56 md:h-64 w-11/12 object-cover rounded-lg"
        src={frontmatter.heroImage}
        alt={`Hero ${frontmatter.title}`}
      />
      <PageTitle title={frontmatter.title} />
      <PageSubTitle
        subtitle={frontmatter.description}
        className="text-center"
      />
      <article
        className="leading-relaxed w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-6/12 sm:text-lg md:text-xl mx-auto mt-10 text-justify"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </DefaultLayout>
  )
}

export default EssayTemplatePage
