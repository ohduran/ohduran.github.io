import React from "react";
import { DefaultLayout } from "../layouts";
import { InternalLink } from "../atoms";

const Home = () => {
  return (
    <DefaultLayout
      title="Home"
      className="grid grid-rows-2 container mx-auto"
      style={{
        gridTemplateColumns: "1fr 1fr min-content",
      }}
    >
      <figure className="col-start-1 sm:col-start-2 row-start-1 row-span-2 self-center  z-0 flex">
        <img
          className="h-auto w-auto opacity-80 lg:w-1/2 float-right"
          src="./Cascais.jpg"
          alt="Writer"
          style={{
            mixBlendMode: "overlay",
          }}
        />
      </figure>
      <main className="col-start-3 col-span-1 row-start-1 row-span-2 z-10 self-center justify-self-center w-7/12 lg:w-6/12 mx-auto text-sm sm:text-base md:text-lg">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">
          Hi, I'm{" "}
          <span className="font-family-tertiary text-xl sm:text-2xl md:text-3xl">
            Álvaro Durán
          </span>
          .
        </p>
        <p className="mt-4 md:mt-5">
          I'm a software engineer at{" "}
          <a className="text-nord-7" href="https://edgetier.com">
            EdgeTier
          </a>
          , and I'm especially interested in the{" "}
          <span className="font-semibold text-nord-13 font-family-secondary">
            uncontrollability
          </span>{" "}
          of the infrastructure of the world.
        </p>
        <p className="mt-1 md:mt-5">
          I{" "}
          <a href="https://www.youtube.com/watch?v=S3ebYJxXBRU">
            speak at conferences
          </a>{" "}
          and <InternalLink to="/essays">write essays</InternalLink>.
        </p>
      </main>
      <div
        id="box"
        className="border-2 sm:border-4 md:border-6 lg:border-8 border-solid border-nord-8 z-0 m-1 md:m-12 col-start-1 col-span-2 row-start-1 row-span-2"
      />
      <aside className="col-start-1 col-span-2 row-start-1 row-span-2 z-10 w-11/12 mx-auto text-2xl sm:text-3xl md:text-5xl font-family-secondary font-bold grid gap-2 grid-cols-7 grid-rows-6 justify-center items-center">
        <span className="col-start-2 row-start-1">Á</span>
        <span className="col-start-3 row-start-1">L</span>
        <span className="col-start-5 row-start-1">V</span>
        <span className="col-start-3 row-start-3">A</span>
        <span className="col-start-4 row-start-2">R</span>
        <span className="col-start-5 row-start-3">O</span>
        <span className="col-start-6 row-start-3">D</span>
        <span className="col-start-1 row-start-4">U</span>
        <span className="col-start-4 row-start-5">R</span>
        <span className="col-start-5 row-start-6">Á</span>
        <span className="col-start-6 row-start-6">N</span>
      </aside>
    </DefaultLayout>
  );
};

export default Home;
