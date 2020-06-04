import React from "react"
import "../global.css"

import IconGitHub from "../icons/github.js"
import IconLinkedIn from "../icons/linkedin.js"
import IconMail from "../icons/mail.js"

import innovationBulb from "../static/manypixels/innovationBulb.svg"

import NewsLetterForm from "./NewsletterForm"

export default class extends React.Component {
  render() {
    return (
      <footer className="mt-10 p-10 bg-nord-10 flex">
        <section className="w-7/12 mx-auto">
          <p className="text-lg">
            La <span className="text-nord-13">digitalización</span>
            <br />
            de tu empresa, <span className="text-nord-0">ahora</span>
          </p>
          <NewsLetterForm className="mt-2" />
        </section>
        <section>
          <img className="h-32" src={innovationBulb} />
        </section>
      </footer>
    )
  }
}
