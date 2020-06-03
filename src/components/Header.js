import React from "react"
import "../global.css"
import logo from "../static/logos/logo-alvaro-duran.png"
import { Link } from "gatsby"

export default class extends React.Component {
  render() {
    return (
      <>
        <header
          className="p-2 bg-nord-10 shadow-lg grid z-10"
          style={{
            gridTemplateColumns: "max-content 1fr",
          }}
        >
          <Link to="/">
            <img className="h-12 xs:h-16" src={logo} alt="logo" />
          </Link>
          <nav className="col-start-2 mt-4 mr-2 text-nord-4 text-right md:text-lg font-family-baloo flex justify-center sm:justify-end">
            <Link className="no-underline" to="/essays">
              Ensayos
            </Link>
            <Link className="ml-5 no-underline" to="/newsletter">
              Newsletter
            </Link>
          </nav>
        </header>
      </>
    )
  }
}
