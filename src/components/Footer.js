import React from "react"
import "../global.css"

import IconGitHub from "../icons/github.js"
import IconLinkedIn from "../icons/linkedin.js"
import IconMail from "../icons/mail.js"

import peak_mountain from "../static/manypixels/peak-mountain.svg"

export default class extends React.Component {
  render() {
    return (
      <footer className="mt-10 text-nord-4">
        <svg
          className={`fill-current text-nord-1`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,192L120,208C240,224,480,256,720,224C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>

        <section
          className="-mt-1 bg-nord-1 px-3 grid gap-2 grid-rows-2"
          style={{
            gridTemplateColumns: "minmax(max-content, 1fr) 1fr",
            gridTemplateRows: "minmax(max-content, 1fr) 1fr",
          }}
        >
          <div
            className="col-span-2 xs:col-span-1"
            style={{
              justifySelf: "center",
            }}
          >
            <h1 className="text-center xs:text-justify text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-family-baloo font-bold">
              La <span className="text-nord-7">digitalización</span>
              <br className="" /> de tu empresa,
              <br />
              <span className="text-nord-11">ahora</span>
            </h1>
          </div>

          <div
            className="row-start-2 col-span-2 sm:col-span-1 mx-2 md:mt-2"
            style={{
              justifySelf: "center",
              alignSelf: "start",
            }}
          >
            <h2 className="mx-auto text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
              Descubre el potencial digital de tu negocio
            </h2>
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/alvaroduran"
              method="post"
              className="mt-1 md:mt-2 lg:mt-3 w-11/12 mx-auto embeddable-buttondown-form flex justify-center"
            >
              <input
                type="email"
                className="rounded-lg shadow-lg text-center text-xs sm:text-sm md:text-base lg:text-lg"
                name="email"
                id="bd-email"
                placeholder="¡Únete a la newsletter!"
              />
              <input
                type="submit"
                className="ml-1 rounded-lg shadow-lg bg-nord-7 text-nord-6 p-2 text-center text-xs sm:text-sm md:text-base font-bold"
                value="Registrarse"
              />
              <input type="hidden" value="1" name="embed"></input>
            </form>
          </div>

          <img
            className="hidden xs:block w-11/12 xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl col-start-2 sm:row-span-2 text-center"
            src={peak_mountain}
            style={{
              justifySelf: "center",
            }}
            alt="Lo alto de la montaña"
          />
        </section>

        <section className="bg-nord-1 flex justify-center py-2">
          <a
            className="text-nord-4"
            href="https://www.linkedin.com/in/alvaroduranbarata/"
          >
            <IconLinkedIn className="h-8" />
          </a>
          <a className="text-nord-4" href="https://github.com/ohduran">
            <IconGitHub className="h-8" />
          </a>
          <a className="text-nord-4" href="mailto:alvaro.duranb@gmail.com">
            <IconMail className="h-8" />
          </a>
        </section>
      </footer>
    )
  }
}
