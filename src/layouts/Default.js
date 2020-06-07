import React from "react"
import "../global.css"
import SEO from "../components/SEO"
import Header from "../components/Header/Header"
import Footer from "../components/Footer"

const Default = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  )
}

export default Default
