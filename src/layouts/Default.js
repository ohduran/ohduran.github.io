import React from "react"
import '../global.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default class extends React.Component {

    render () {
      return (
        <>
          <Header />
          <main>
            {this.props.children}
          </main>

          <Footer />

        </>
      )
    }

}
