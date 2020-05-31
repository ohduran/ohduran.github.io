import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/Default"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`

const EssayTemplatePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <DefaultLayout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.description}</h2>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
    </DefaultLayout>
  )
}

export default EssayTemplatePage
