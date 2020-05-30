import React from "react"
import "../global.css"
import logo from "../static/logos/logo-alvaro-duran.png"
import { Link } from "gatsby"

export default class extends React.Component {
  render() {
    return (
      <>
        <header
          className="p-2 bg-nord-1 shadow-lg grid z-10"
          style={{
            gridTemplateColumns: "max-content 1fr",
          }}
        >
          <Link to="/">
            <img className="h-12 xs:h-16" src={logo} alt="logo" />
          </Link>
          <nav className="col-start-2 mt-4 mr-2 text-nord-4 text-right font-semibold font-family-baloo">
            <Link to="/newsletter">Newsletter</Link>
          </nav>
        </header>
        {/* https://getwaves.io/ */}
        <svg
          className={`fill-current text-nord-1 md:hidden`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,170.7C672,181,768,203,864,192C960,181,1056,139,1152,101.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </>
    )
  }
}
