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
        <section className="mt-5 text-center">
          <h2 className="text-lg font-family-clearface-bold">
            ¿Te sientes así?
          </h2>
          <div className="text-xs w-11/12 mx-auto">
            <p className="mt-3">
              “Monté una tienda e-commerce con un proveedor y me dejo un 10% de
              mi facturación en las comisiones."
            </p>
            <p className="mt-3">
              "Todos me dicen que mis precios son muy altos, y creo que es
              porque mi web no parece profesional."
            </p>
            <p className="mt-3">
              “Creo hay mucha gente que entra en mi tienda online y no compra, y
              no sé cómo solucionarlo."
            </p>
            <p className="mt-3">
              "No quiero acabar vendiendo mis productos en Amazon, pero es donde
              está todo el mundo."
            </p>
          </div>
          <div className="mt-5 w-11/12 mx-auto">
            <h2 className="text-sm">
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
              className="h-32 float-left"
              src={profilePic}
              style={{
                shapeOutside: "circle()",
              }}
            />
            <figcaption>
              <h1 className="text-sm">
                Me llamo Álvaro Durán, y soy el consultor estratégico de las
                e-commerce.
              </h1>
              <h2 className="mt-3 text-xs">
                Me he especializado en entender{" "}
                <span className="text-nord-9">
                  por qué las decisiones acertadas, en la Web, son
                  contraintuitivas
                </span>{" "}
                para casi todo el mundo.
              </h2>
            </figcaption>
          </figure>
        </section>
        <section className="w-11/12 text-xs mx-auto mt-5 text-center">
          <p className="mt-3">
            ¿Por qué Amazon se hizo la e-commerce más grande, si no era más que
            una tienda de libros?
          </p>
          <p className="mt-3">
            <Link
              className="hover:text-nord-13"
              to="/essays/regalar-el-complemento"
            >
              ¿Por qué Google liberó el uso de Android para que Samsung ganase
              millones gracias a ello?
            </Link>
          </p>
          <p className="mt-3">
            ¿Por qué Facebook se gastó 13 mil millones de dólares en comprar
            Instagram?
          </p>
          <p className="mt-3">
            ¿De dónde sale el dinero para pagar los miles de millones de
            pérdidas de Uber?
          </p>
          <img
            className="mt-5 h-48 float-right"
            src={openMap}
            style={{
              shapeOutside: "circle()",
            }}
          />
          <h3 className="mt-5 text-base text-left">
            Saber cómo responder a estas preguntas es esencial para sobrevivir
            en Internet. Aunque se inventó en 1991, aún es territorio
            desconocido para muchos.
            <br />
            <span className="text-nord-9">Es mejor ir con guía.</span>
          </h3>
          <NewsLetterForm className="mt-5">
            Subscríbete a la newsletter para saber más
          </NewsLetterForm>
        </section>
        <section className="mt-10 w-11/12 mx-auto">
          <h2 className="text-lg text-center font-family-clearface-bold">
            Empresas con las que he colaborado
          </h2>
          <div
            className="grid grid-cols-2 grid-rows-3"
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
