import React from "react";
import LabLayout from "../../layouts/LabLayout";

const TschischoldQuote = ({ data }) => {
  return (
    <LabLayout
      background="#d8dee9"
      title="Tschischold Quote"
      description="BauHaus Experiment"
      article={true}
    >
      <main className="min-h-screen flex items-center justify-center py-32">
        <div
          className={`max-w-xl grid m-auto text-nord-0 font-family-tertiary gap-1 grid-cols-6 lg:grid-cols-8  md:transform md:-rotate-45 md:w-auto lg:w-screen`}
          style={{
            maxHeight: "45rem",
          }}
        >
          <p className="z-10 text-4xl md:text-5xl lg:text-6xl uppercase col-start-1 col-span-6 row-start-2 self-end">
            Whitespace
          </p>
          <p className="z-10 text-3xl lg:text-4xl col-start-2 col-span-2 row-start-3">
            is to be regarded as an active
          </p>
          <p
            className="z-10 text-6xl lg:text-8xl col-start-2 row-start-4 row-span-3 self-end"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Element
          </p>
          <p className="z-10 self-start text-right col-start-1 lg:col-start-3 col-span-8 lg:col-span-6 row-start-7 lg:row-start-6 text-3xl lg:text-4xl">
            not a a passive <span className="block uppercase">background</span>
          </p>
          <p
            className="z-10 text-base col-start-8 row-start-3 row-span-2 justify-self-start"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Jan Tschischold
          </p>
          <b
            class="red-bar-1 block w-full h-full bg-nord-11 col-start-1 row-start-3 row-span-4"
            style={{
              minWidth: "3em",
            }}
          />
          <b class="red-bar-2 block w-full h-2 bg-nord-11 self-end z-0 col-start-1 lg:col-start-3 col-span-8 lg:col-span-6 row-start-7 lg:row-start-6" />
          <b class="red-circle block rounded-full bg-nord-11 col-start-4 col-span-3 row-start-1 row-span-3 self-center z-0 w-40 h-40 lg:w-52 lg:h-52" />
        </div>
      </main>
    </LabLayout>
  );
};

export default TschischoldQuote;
