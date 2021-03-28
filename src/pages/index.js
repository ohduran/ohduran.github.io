import React from "react";
import "../styles/pages.css";
import { DefaultLayout } from "../layouts";
import { InternalLink } from "../atoms";

const Home = ({ data }) => {
  return (
    <DefaultLayout
      title="Home"
      className="grid grid-rows-2 container mx-auto"
      style={{
        gridTemplateColumns: "1fr 1fr min-content",
      }}
    >
      <figure className="col-start-2 row-start-1 row-span-2 z-0 flex">
        <img
          className="opacity-20 w-1/2 float-right"
          src="./Cascais.png"
          alt="Writer"
          style={{
            mixBlendMode: "overlay",
          }}
        />
      </figure>
      <main className="col-start-3 col-span-1 row-start-1 row-span-2 z-10 self-center justify-self-center w-6/12 mx-auto text-lg">
        <p className="text-2xl font-semibold">
          Hi, I'm{" "}
          <span className="font-family-tertiary text-3xl">Álvaro Durán</span>.
        </p>
        <p className="mt-5">
          I'm a software engineer at EdgeTier, and I'm especially interested in
          the{" "}
          <span className="font-semibold text-nord-13 font-family-secondary">
            uncontrollability
          </span>{" "}
          of the infrastructure of the world.
        </p>
        <p className="mt-5">
          I{" "}
          <a href="https://www.youtube.com/watch?v=S3ebYJxXBRU">
            speak at conferences
          </a>{" "}
          and <InternalLink to="/essays">write essays</InternalLink>.
        </p>
      </main>
      <div
        id="box"
        className="border-8 border-solid border-nord-8 z-0 m-12 col-start-1 col-span-2 row-start-1 row-span-2"
      />
      <side className="col-start-1 col-span-2 row-start-1 row-span-2 z-10 w-11/12 mx-auto text-5xl font-family-secondary font-bold grid gap-2 grid-cols-7 grid-rows-6 justify-center items-center">
        <span className="col-start-2 row-start-1">Á</span>
        <span className="col-start-3 row-start-1">L</span>
        <span className="col-start-5 row-start-1">V</span>
        <span className="col-start-3 row-start-2">A</span>
        <span className="col-start-4 row-start-2">R</span>
        <span className="col-start-5 row-start-3">O</span>
        <span className="col-start-6 row-start-3">D</span>
        <span className="col-start-1 row-start-4">U</span>
        <span className="col-start-4 row-start-5">R</span>
        <span className="col-start-5 row-start-6">Á</span>
        <span className="col-start-6 row-start-6">N</span>
      </side>
    </DefaultLayout>
  );
};

export default Home;
