import React from "react"
import "../global.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import DefaultLayout from "../layouts/Default"
import Testimonial from "../components/Testimonial"

import profilePic from "../static/images/profile-pic.jpg"
import capco from "../static/logos/capco.svg"
import everis from "../static/logos/everis.png"
import hsbc from "../static/logos/hsbc.svg"
import renta4 from "../static/logos/renta4.svg"
import octopusLabs from "../static/logos/octopusLabs.svg"
import bradesco from "../static/logos/bradesco.svg"

export default class extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <section className="mt-5 text-center">
          <h2 className="text-lg font-family-clearface-bold">
            ¿Te sientes así?
          </h2>
          <div className="text-xs">
            <p>
              “Veo en televisión que todo el mundo está comprando por Internet,
              <br />
              pero no sé como hacer que mi negocio dé el salto.”
            </p>
            <p>“No había necesitado vender online hasta ahora.”</p>
            <p>
              “Sé que estoy dejando de lado a muchos clientes por no tener un
              sitio Web.”
            </p>
            <p>
              “Mi futuro está en Internet, pero sé que con hacer una página web
              no basta.”
            </p>
          </div>
          <div className="mt-5">
            <h2 className="text-base text-nord-13">
              Digitalizarse no es una moda. Es la única manera de mantenerse a
              flote.
            </h2>
            <h3 className="text-sm">
              Un negocio profesional debe recurrir a profesionales.
            </h3>
          </div>
        </section>
        <section className="mt-10">
          <figure className="w-10/12 mx-auto text-xs">
            <img
              className="h-40 float-left"
              src={profilePic}
              style={{
                shapeOutside: "circle()",
              }}
            />
            <figcaption>
              <h1 className="text-lg ">
                Me llamo Álvaro Durán,
                <br />y ayudo a las empresas
                <br />a que crezcan en Internet.
              </h1>
              <h2 className="mt-5">
                Me he especializado en entender qué diferencias hay entre los
                negocios de toda la vida y los digitales, y cómo muchas veces{" "}
                <span className="text-nord-9">
                  las mejores decisiones en la Web son contraintuitivas
                </span>
                .
              </h2>
            </figcaption>
          </figure>
        </section>
        <section className="mt-16">
          <h2 className="text-lg text-center font-family-clearface-bold">
            Empresas con las que he colaborado
          </h2>
          <div
            className="grid gap-1 grid-cols-3 grid-rows-2"
            style={{
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <img className="h-10" src={capco} />
            <img className="h-10" src={everis} />
            <img className="h-6" src={hsbc} />
            <img className="h-6" src={renta4} />
            <img className="h-6" src={octopusLabs} />
            <img className="h-20" src={bradesco} />
          </div>
        </section>
        <section className="mt-10">
          <div className="grid gap-3 grid-cols-1 grid-rows-3">
            <Testimonial author="Jaime Álvarez, Finance Consultant">
              Álvaro es una persona dinámica, muy responsable con su propio
              trabajo y de trato amable y cercano.
            </Testimonial>
            <Testimonial
              author="Victor Abad Fau de Casa Juana,
Head of Multinational Clients APAC at ING"
            >
              Álvaro ha sido muy entusiasta con su trabajo. Su estilo de
              presentación es llamativo, riguroso y claro.
            </Testimonial>
            <Testimonial author="Miguel Ángel Iglesias, Non-Executive Director at CACF-Bankia, Senior Advisor at IFAD">
              Sin duda Álvaro será un factor positivo en cualquier equipo.
            </Testimonial>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-lg text-center font-family-clearface-bold">
            ¿Te interesa?
          </h2>
          <h3 className="mt-5 text-center">
            Envíame{" "}
            <a
              href="mailto:alvaro.duranb@gmail.com"
              className="no-underline text-nord-13 hover:underline hover:text-nord-9 cursor-pointer"
            >
              un email
            </a>{" "}
            para ver disponibilidad.
          </h3>
        </section>
      </DefaultLayout>
    )
  }
}
