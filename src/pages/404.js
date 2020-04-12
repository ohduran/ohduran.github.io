import React from "react"
import '../global.css'
import DefaultLayout from '../layouts/Default'

import Icon404 from '../static/manypixels/404.svg'



export default class extends React.Component {

    render () {
      return (
        <DefaultLayout>
          <section className="md:mt-20 text-xl font-family-baloo">
            <h2 className="text-center">¡Ups! La página que buscas no existe </h2>
            <img className="mt-5 h-32 md:h-64 mx-auto" src={Icon404} alt="404" />
          </section>
        </DefaultLayout>
      )
    }

}
