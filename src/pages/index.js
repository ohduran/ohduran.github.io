import React from "react"
import { Link } from "gatsby"
import "../global.css"

import DefaultLayout from "../layouts/Default"
import Testimonial from "../components/Testimonial"
import NewsLetterForm from "../components/NewsletterForm"

import profilePic from "../static/images/profile-pic.jpg"
import capco from "../static/logos/capco.svg"
import everis from "../static/logos/everis.png"
import hsbc from "../static/logos/hsbc.svg"
import renta4 from "../static/logos/renta4.svg"
import octopusLabs from "../static/logos/octopusLabs.svg"
import bradesco from "../static/logos/bradesco.svg"

import openMap from "../static/manypixels/openMap.svg"

export default class extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <section className="mt-5 sm:mt-7 text-center">
          <h2 className="text-lg sm:text-xl font-family-clearface-bold">
            ¿Te sientes así?
          </h2>
          <div className="text-xs sm:text-sm w-11/12 mx-auto">
            <p className="mt-3">
              “Monté una tienda e-commerce con un proveedor
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>y me dejo un 10% de mi
              facturación en las comisiones."
            </p>
            <p className="mt-3">
              "Todos me dicen que mis precios son muy altos,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>y creo que es porque mi web no
              parece profesional."
            </p>
            <p className="mt-3">
              "No quiero acabar vendiendo mis productos en Amazon,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>pero es donde está todo el
              mundo."
            </p>
            <p className="mt-3">
              “Hay mucha gente que entra en mi tienda online y no compra,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>y no sé cómo solucionarlo."
            </p>
          </div>
          <div className="mt-5 sm:mt-7 w-11/12 mx-auto">
            <h2 className="text-sm sm:text-base">
              Los negocios tradicionales necesitan una estrategia para salir
              adelante.
              <br />
              <span className="text-nord-13">
                Los negocios digitales, también.
              </span>
            </h2>
          </div>
        </section>
        <section className="mt-10">
          <figure className="w-10/12 mx-auto">
            <img
              className="h-32 sm:h-40 float-left"
              src={profilePic}
              style={{
                shapeOutside: "circle()",
              }}
            />
            <figcaption>
              <h1 className="text-sm sm:text-base">
                Me llamo Álvaro Durán, y soy
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>el consultor estratégico de
                las e-commerce.
              </h1>
              <h2 className="mt-3 text-xs sm:text-sm">
                Me he especializado en entender
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="text-nord-9">
                  por qué las decisiones acertadas, en la Web, son
                  contraintuitivas
                </span>
                .
              </h2>
            </figcaption>
          </figure>
        </section>
        <section className="w-11/12 text-xs sm:text-sm mx-auto mt-16 sm:mt-24 text-center">
          {/* Regalar el complemento */}
          <p className="mt-3">
            <Link
              className="hover:text-nord-13"
              to="/essays/regalar-el-complemento"
            >
              ¿Por qué Google distribuye Android gratis? ¿Es por sus datos?
            </Link>
          </p>
          {/* Una empresa en Internet o pretende conquistar el mundo o acabará devorada */}
          <p className="mt-3">
            ¿Por qué Tuenti nunca consiguió despegar del todo, y Facebook sí?
          </p>
          {/* Hay dos tipos de empresa: Amazon y Ben & Jerry's */}
          <p className="mt-3">
            ¿Por qué Amazon se hizo la e-commerce más grande, si sólo era una
            tienda de libros?
          </p>
          {/* Los fondos de capital riesgo. */}
          <p className="mt-3">
            ¿De dónde saca Uber el dinero para pagar los miles de millones en
            pérdidas que tiene cada mes?
          </p>
          <div className="mt-5 sm:mt-16 w-11/12 mx-auto flex">
            <h3 className="my-auto text-base sm:text-lg text-left">
              Saber cómo responder a estas preguntas es esencial para sobrevivir
              en Internet. Aunque se inventó en 1991, aún es territorio
              desconocido para muchos.
              <br className="sm:hidden" />
              <span className="text-nord-13">
                {" "}
                Es mejor tener un plan, y saber cómo ejecutarlo.
              </span>
            </h3>
            <img className="h-48 float-right" src={openMap} />
          </div>
          <NewsLetterForm className="mt-5 sm:mt-7 w-11/12 mx-auto ">
            Subscríbete a la newsletter para saber más
          </NewsLetterForm>
        </section>
        <section className="mt-10 sm:mt-16 w-11/12 mx-auto">
          <h2 className="text-lg sm:text-xl text-center font-family-clearface-bold">
            Empresas con las que he colaborado
          </h2>
          <div
            className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 sm:w-11/12 sm:mx-auto"
            style={{
              alignItems: "center",
            }}
          >
            <img className="h-8" src={capco} />
            <img className="h-10" src={everis} />
            <img className="h-8" src={hsbc} />
            <img className="h-6" src={renta4} />
            <img className="h-8" src={octopusLabs} />
            <img className="h-24" src={bradesco} />
          </div>
        </section>
        <section className="mt-10 sm:mt-16">
          <div className="grid gap-3 sm:gap-6 grid-cols-1 grid-rows-3">
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
        <section className="mt-10 sm:mt-16">
          <h2 className="text-lg sm:text-xl text-center font-family-clearface-bold">
            ¿Te interesa?
          </h2>
          <h3 className="mt-5 sm:mt-7 text-center">
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
