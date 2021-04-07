import React from "react";
import LabLayout from "../../layouts/LabLayout";

const SlackLogo = () => {
  return (
    <LabLayout
      background="#2e3440"
      title="Unordered Name"
      description="The iconic name in an unordered manner."
      article={true}
    >
      <main className="min-h-screen flex items-center justify-center text-nord-6">
        <div
          className="w-96 h-96 grid grid-rows-2 container mx-auto"
          style={{
            gridTemplateColumns: "1fr 1fr min-content",
          }}
        >
          <div
            id="box"
            className="border-2 sm:border-4 md:border-6 lg:border-8 border-solid border-nord-8 z-0 m-1 md:m-12 col-start-1 col-span-2 row-start-1 row-span-2"
          />
          <div className="col-start-1 col-span-2 row-start-1 row-span-2 z-10 w-11/12 mx-auto text-2xl sm:text-3xl md:text-5xl font-family-secondary font-bold grid gap-2 grid-cols-7 grid-rows-6 justify-center items-center">
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
          </div>
        </div>
      </main>
    </LabLayout>
  );
};

export default SlackLogo;
