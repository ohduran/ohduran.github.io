import React from "react";
import { Link } from "gatsby"

const Home = () => {
  return (
    <>
      <main className="w-11/12 mx-auto">
        <article className="mt-12 ml-3 mb-12 mr-1 md:grid md:gap-1" style={{
          gridTemplateColumns: "calc(.1rem + .5vw) max-content 5rem min-content 1fr minmax(30ch,50ch) 1fr",
          gridTemplateRows: "calc(1rem + 1vw) 50px max-content min-content 1fr"
        }}>
          <h1 className="z-10 w-11/12 mx-auto text-4xl font-family-secondary font-bold grid gap-4 grid-cols-7 grid-rows-6 justify-center items-center md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5">
            <span className="col-start-2 row-start-1">Á</span>
            <span className="col-start-3 row-start-1">L</span>
            <span className="col-start-7 row-start-1">V</span>
            <span className="col-start-3 row-start-2">A</span>
            <span className="col-start-4 row-start-3">R</span>
            <span className="col-start-5 row-start-3">O</span>
            <span className="col-start-1 row-start-4">D</span>
            <span className="col-start-2 row-start-5">U</span>
            <span className="col-start-4 row-start-6">R</span>
            <span className="col-start-5 row-start-6">Á</span>
            <span className="col-start-6 row-start-6">N</span>
          </h1>
          <div className="hidden md:block border-4 z-0 border-solid border-nord-8 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-5" id="red-box" />
          <section className="mt-8 mb-8 leading-relaxed font-family-primary text-lg md:col-start-6 md:col-end-7 md:row-start-4 md:row-end-6">
            <p>Hi, I'm Álvaro Durán.</p>
            <p className="mt-3">I'm a Senior Software Engineer at <span className="font-semibold" style={{ color: "#0f85fb"}}>Vesto</span>. I'm especially interested in the uncontrollability of the infrastructure of the world.</p>
          </section>
          <nav role={"navigation"} className="float-left h-max font-semibold font-family-secondary uppercase bg-nord-8 md:col-start-3 md:col-end-7 md:row-start-3 md:row-end-4" style={{
            writingMode: "vertical-rl"
          }}>
            <ul className="p-4">
              <li><Link to="/about/">The Writer</Link></li>
              <li><Link to="/essays/">Essays</Link></li>
            </ul>
          </nav>
          <figure className="self-center z-0 float-left md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-6">
            <img
              className="h-max md:h-72 w-auto opacity-50 object-none object-right"
              src="./ProfilePic.jpg"
              alt="Writer"
              style={{
                mixBlendMode: "overlay",
              }}
            />
          </figure>
        </article>
      </main>
  </>
  );
};

export default Home;
