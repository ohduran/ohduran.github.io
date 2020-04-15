import React from "react"
import '../global.css'
import { graphql } from 'gatsby'
import Img from "gatsby-image";

import DefaultLayout from '../layouts/Default'
import Testimonial from '../components/Testimonial'

import teamMeeting from '../static/manypixels/teamMeeting.svg'
import scientist from '../static/manypixels/scientist.svg'
import designer from '../static/manypixels/designer.svg'
import rocketLaunch from '../static/manypixels/rocketLaunch.svg'

import capco from '../static/logos/capco.svg'
import everis from '../static/logos/everis.png'
import hsbc from '../static/logos/hsbc.svg'
import renta4 from '../static/logos/renta4.svg'
import octopusLabs from '../static/logos/octopusLabs.svg'
import bradesco from '../static/logos/bradesco.svg'



export default class extends React.Component {

    render () {
      return (
        <DefaultLayout>
          {/* Planteamiento del Problema */}
          <section className="w-11/12 mx-auto">
            <h2 className="mb-1 md:mt-10 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-family-baloo">
              ¿Te sientes así?
            </h2>

            <div className="text-xs xs:text-sm lg:text-base italic grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:w-10/12  md:mx-auto gap-2" style={{
                alignItems: 'end'
              }}>
              <h3 className="col-start-1 row-span-2 md:row-span-1">
                "En mi empresa se podrían automatizar muchas tareas, pero no sé cómo hacerlo ni por dónde empezar."
              </h3>
              <h3 className="mt-3 col-start-2 row-span-2 md:row-span-1 text-right">
                "No tenemos mentalidad digital; nos salva que nuestros competidores tampoco, de momento."
              </h3>
            </div>
          </section>

          <section className="mt-5 w-11/12 mx-auto text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed grid grid-cols-2 grid-rows-3 gap-4" style={{
              alignItems: 'center'
            }}>
            <h2 className="row-start-1 col-span-2">
              Da igual lo que digan:<br/><span className="bg-nord-12 font-semibold text-white p-1 rounded-lg">La gente realmente no quiere cambiar</span>
            </h2>
            <h2 className="row-start-2 col-span-2 text-right">
              Pensar que<br/>se ha hecho siempre así<br/><span className="bg-nord-13 font-semibold text-white p-1 rounded-lg">se interpone en su camino</span>
            </h2>
            <h2 className="row-start-3 col-span-2">
              Trabajar más horas no es suficiente;<br />ahora hay que <span className="bg-nord-14 font-semibold text-white p-1 rounded-lg">trabajar mejor</span>
            </h2>
          </section>

          <section className="w-7/12 mx-auto mt-5 md:mt-10 text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            <h2 className="">
              La revolución digital está haciendo que los negocios que no se adapten<br/>mueran lentamente.
            </h2>
            <h2 className="mt-2">
              Digitalizarse no es una moda, sino la única manera de mantenerse a flote.
            </h2>

          </section>

          <div id="fondo-playa" className="mt-5 bg-nord-7">
            <svg className={`fill-current text-nord-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill-opacity="1" d="M0,288L48,293.3C96,299,192,309,288,309.3C384,309,480,299,576,256C672,213,768,139,864,90.7C960,43,1056,21,1152,58.7C1248,96,1344,192,1392,240L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            {/* Quien soy */}
            <section className="mt-5 w-11/12 object-cover mx-auto grid grid-cols-2 grid-rows-2 gap-6 rounded-lg text-nord-4 text-right font-family-baloo" style={{
                alignItems: 'center',
              }}>
              <Img className="row-span-2 h-full object-cover rounded-lg shadow-xl"
                  sizes={this.props.data.profileImage.sizes} alt="profile" />
              <h2 className="m-2 col-start-2 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Soy Álvaro Durán,<br/>y ayudo a las pymes a <span className="text-nord-1">digitalizarse</span>
              </h2>
              <h3 className="col-start-2 row-start-2 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                Todo empieza con una pregunta:<br/>si pudiésemos quitarnos de encima una tarea,<br/>¿cuál sería?
              </h3>
            </section>
          </div>
          <svg className={`fill-current text-nord-7`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,96C384,64,480,64,576,106.7C672,149,768,235,864,250.7C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>

          <section className="mt-5">
            <h2 className="mb-1 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-family-baloo">Las 4 Reglas de la Digitalización</h2>
            <div className="my-5 w-10/12 mx-auto grid grid-rows-4 sm:grid-rows-2 grid-cols-4 gap-4" style={{
                alignItems: 'center',
                justifyItems: 'center'
              }}>

              <div className="col-start-1 row-start-1 col-span-4 sm:col-span-2 flex align-center">
                <img src={teamMeeting} className="h-16 sm:h-24 md:h-32 lg:h-48" alt="Reglas de Digitalizacion - social" />
                <h3 className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center my-auto">Toda digitalización es un proceso <span className="font-family-baloo">social</span></h3>
              </div>
              <div className="col-start-1 row-start-2 col-span-4 sm:col-start-3 sm:row-start-1 sm:col-span-2 flex align-center">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center my-auto">La clave es <span className="font-family-baloo">experimentar</span> y explorar los límites</h3>
                <img src={scientist} className="ml-2 h-16 sm:h-24 md:h-32 lg:h-48" alt="Reglas de Digitalizacion - experimentar" />
              </div>
              <div className="col-start-1 row-start-3 col-span-4 sm:col-start-1 sm:row-start-2 sm:col-span-2 flex align-center">
                <img src={designer} className="h-16 sm:h-24 md:h-32 lg:h-48" alt="Reglas de Digitalizacion - concretar" />
                <h3 className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center my-auto">Hablar de ideas <span className="font-family-baloo">concretas</span> facilita la comunicación</h3>
              </div>
              <div className="col-start-1 row-start-4 col-span-4 sm:col-start-3 sm:row-start-2 sm:col-span-2 flex align-center">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center my-auto">Mejor decir <span className="font-family-baloo">'está terminado'</span> que 'está perfecto'</h3>
                <img src={rocketLaunch} className="ml-2 h-16 sm:h-24 md:h-32 lg:h-48" alt="Reglas de Digitalizacion - velocidad"/>
              </div>
            </div>
          </section>

          {/* Compañías con las que he colaborado */}
          <svg className={`mt-5 fill-current text-nord-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,144C384,107,480,53,576,58.7C672,64,768,128,864,160C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <section className="bg-nord-10 -mt-1 pt-3">
            <h2 className="mb-1 text-nord-6 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-family-baloo">Compañías con las que he colaborado</h2>
            <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-2 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 md:gap-3" style={{
                justifyItems: 'center',
                alignItems: 'center'
              }}>
              <img src={capco} alt="Capco" />
              <img className="h-16" src={everis} alt="Capco" />
              <img className="h-10" src={hsbc} alt="Capco" />
              <img className="h-6" src={renta4} alt="Capco" />
              <img className="h-10" src={octopusLabs} alt="Capco" />
              <img className="h-24" src={bradesco} alt="Capco" />
            </div>
          </section>
          <svg className={`fill-current text-nord-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,181.3C672,160,768,160,864,181.3C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>

          {/* Testimonials */}
          <section className="mt-5 w-11/12 sm:w-9/12 md:w-7/12 lg:w-11/12 mx-auto grid grid-cols-3 gap-8" style={{
              gridTemplateRows: 'min-content min-content min-content',
              alignItems: 'center'
            }}>

            <Testimonial className="row-start-1 col-span-3 xl:col-span-1"
                         value="Álvaro es una persona dinámica, muy responsable con su propio trabajo y de trato amable y cercano."
                         author="Jaime Álvarez, Finance Consultant" />

            <Testimonial className="row-start-2 xl:row-start-1 xl:col-start-2 col-span-3 xl:col-span-1"
                        value="Álvaro ha sido muy entusiasta con su trabajo. Su estilo de presentación es llamativo, riguroso y muy claro."
                        author="Víctor Abad Fau de Casa Juana, Head of Multinational Clients APAC at ING" />

            <Testimonial className="row-start-3 xl:row-start-1 xl:col-start-3 col-span-3 xl:col-span-1"
                       value="Álvaro destaca por su tremendo entusiasmo, sus ganas de aprender y su excelente capacidad de comunicación. Sin duda será un factor positivo en cualquier equipo."
                       author="Miguel Ángel Iglesias, Non-Executive Director at CACF-Bankia, Senior Advisor at IFAD" />

          </section>

          {/* Trabajemos juntos */}
          <section className="mt-10">
            <h2 className="mb-1 sm:mb-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-family-baloo">Trabajemos juntos</h2>
            <form className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 mx-auto" action="https://formspree.io/xjvbobay" method="POST">
              <p className="mt-3 text-xs sm:text-sm md:text-base text-center">Para comentar tu proyecto y desarrollar una propuesta,<br/>utiliza el siguiente formulario o envíame un email a <a className="font-family-baloo" href="mailto:alvaro.duranb@gmail.com" itemprop="email">alvaro.duranb@gmail.com</a>.</p>
              <div className="mt-3 w-9/12 mx-auto ">
                <textarea className="rounded-lg shadow-lg w-full text-center text-sm" name="message" rows="5" placeholder="¿Cuál es tu proyecto y cómo puedo ayudarte?" />
                <input type="hidden" name="hidden" id="hidden" aria-describedby="hidden" />
                <div className="flex justify-around">
                  <input className="mt-3 px-3 py-1 text-xs text-center w-8/12 max-w-md rounded-lg shadow-lg" type="email" name="_replyto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu email" />
                  <button className="mt-3 px-3 py-1 text-xs text-center w-3/12 max-w-sm rounded-lg shadow-lg font-family-baloo bg-nord-7" type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </section>

        </DefaultLayout>
      )
    }

}

export const pageQuery = graphql`
  query profileImageQuery {
    profileImage: imageSharp {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
