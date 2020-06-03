import React from "react"
import "../global.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import DefaultLayout from "../layouts/Default"
import Testimonial from "../components/Testimonial"

import capco from "../static/logos/capco.svg"
import everis from "../static/logos/everis.png"
import hsbc from "../static/logos/hsbc.svg"
import renta4 from "../static/logos/renta4.svg"
import octopusLabs from "../static/logos/octopusLabs.svg"
import bradesco from "../static/logos/bradesco.svg"

export default class extends React.Component {
  render() {
    return <DefaultLayout>hola</DefaultLayout>
  }
}

export const pageQuery = graphql`
  query profileImageQuery {
    allImageSharp(
      filter: { sizes: { originalName: { eq: "profile-pic.jpg" } } }
    ) {
      edges {
        node {
          id
          sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
