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
        <main className="w-11/12 mx-auto pt-10 flex justify-around">
          <section className="">
            <div className="text-base xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl">
              <p className="text-center xs:text-left">
                La <span className="text-nord-13">digitalización</span>
                <br />
                de tu empresa, <span className="text-nord-0">ahora</span>
              </p>
            </div>
            <NewsLetterForm className="text-center mt-2 sm:mt-4 md:mt-8">
              Descubre el potencial digital de tu negocio
            </NewsLetterForm>
          </section>
          <section className="hidden xs:block">
            <img className="h-32 sm:h-40 md:h-64" src={innovationBulb} />
          </section>
        </main>
        <aside
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
        </aside>

        {/* 
          <div className="pt-10 w-11/12 mx-auto flex justify-between">
          <section className="w-7/12 mx-auto text-base xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl"></section>
        </div>
          */}
      </footer>
    )
  }
}
