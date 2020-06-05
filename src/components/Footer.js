import React from "react"
import "../global.css"

import IconGitHub from "../icons/github.js"
import IconLinkedIn from "../icons/linkedin.js"
import IconMail from "../icons/mail.js"
import IconInstagram from "../icons/instagram.js"

import innovationBulb from "../static/manypixels/innovationBulb.svg"

import NewsLetterForm from "./NewsletterForm"

export default class extends React.Component {
  render() {
    return (
      <footer className="mt-10 md:mt-16 p-1 bg-nord-10">
        <div className="p-10 flex">
          <section className="w-7/12 mx-auto text-lg sm:text-3xl md:text-4xl lg:text-6xl">
            <p>
              La <span className="text-nord-13">digitalización</span>
              <br />
              de tu empresa, <span className="text-nord-0">ahora</span>
            </p>
            <NewsLetterForm className="text-center mt-2 sm:mt-4 md:mt-8">
              Descubre el potencial digital de tu negocio
            </NewsLetterForm>
          </section>
          <section>
            <img className="h-32 sm:h-40 md:h-64" src={innovationBulb} />
          </section>
        </div>
        <div
          className="mt-5 grid gap-2"
          style={{
            gridTemplateColumns:
              "1fr min-content min-content min-content min-content 1fr",
            gridTemplateRows: "min-content",
          }}
        >
          <a className="col-start-2" href="https://github.com/ohduran">
            <IconGitHub className="h-8 shadow-lg" />
          </a>
          <a className="col-start-3" href="https://instagram.com/digitalvaro">
            <IconInstagram className="h-8 shadow-lg" />
          </a>

          <a
            className="col-start-4"
            href="https://linkedin.com/in/alvaroduranbarata"
          >
            <IconLinkedIn className="h-8 shadow-lg" />
          </a>

          <a className="col-start-5" href="mailto:alvaro.duranb@gmail.com">
            <IconMail className="h-8 shadow-lg" />
          </a>
        </div>
      </footer>
    )
  }
}
