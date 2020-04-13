import React from "react"
import '../global.css'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'



export default class extends React.Component {

    render () {
      return (
        <>
          <SEO />
          <Header />
          <main>
            {this.props.children}
          </main>

          <Footer />

        </>
      )
    }

}
