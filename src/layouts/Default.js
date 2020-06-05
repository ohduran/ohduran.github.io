import React from "react"
import "../global.css"
import SEO from "../components/SEO"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"

export default class extends React.Component {
  render() {
    return (
      <>
        <SEO />
        <Header />
        <main className="min-h-screen">{this.props.children}</main>

        <Footer />
      </>
    )
  }
}
