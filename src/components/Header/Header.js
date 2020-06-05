import React from "react"
import "../../global.css"
import logo from "../../static/logos/logo-alvaro-duran-dark.png"
import { Link } from "gatsby"
import HeaderLink from "./HeaderLink"

import innovationDesk from "../../static/manypixels/innovationDesk.svg"
import newMessage from "../../static/manypixels/newMessage.svg"

export default class extends React.Component {
  render() {
    return (
      <>
        <header
          className="bg-nord-10 grid"
          style={{
            gridTemplateColumns:
              "max-content 1fr max-content max-content 1fr min-content",
          }}
        >
          <Link to="/" className="col-start-3 sm:col-start-1">
            <img
              className="h-12 sm:h-16 lg:h-20 py-1 px-3 m-1"
              src={logo}
              alt="logo"
            />
          </Link>
          <nav className="col-start-4 flex sm:col-start-7">
            <HeaderLink
              className=""
              text="Ensayos"
              to="/essays"
              imgSrc={innovationDesk}
            />
            <HeaderLink
              className="ml-5"
              text="Newsletter"
              to="/newsletter"
              imgSrc={newMessage}
            />
          </nav>
        </header>
      </>
    )
  }
}