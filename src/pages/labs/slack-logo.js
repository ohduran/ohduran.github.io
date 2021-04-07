import React from "react";
import LabLayout from "../../layouts/LabLayout";

const UnorderedName = () => {
  return (
    <LabLayout
      background="#611f69"
      title="Slack Logo Experiment"
      description="Sparking further outrage by copying a logo. I just used a CSS Grid layout with some predefined Tailwind Colors and I rolled with it."
      article={true}
    >
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-white h-64 w-64 rounded-full shadow-2xl p-10">
          <div className="grid gap-2  grid-cols-4 grid-rows-4 w-full h-full">
            {/* blue */}
            <b className="col-start-2 bg-blue-400 rounded-full rounded-br-none" />
            <b className="row-start-2 col-span-2 bg-blue-400 rounded-full" />

            {/* green */}
            <b className="row-span-2 bg-green-400 rounded-full" />
            <b className="row-start-2 col-start-4 bg-green-400 rounded-full rounded-bl-none" />

            {/* red  */}
            <b className="row-start-3 bg-red-600 rounded-full rounded-tr-none" />
            <b className="col-start-2 row-span-2  bg-red-600 rounded-full" />

            {/* orange */}
            <b className="col-span-2 bg-yellow-500 rounded-full" />
            <b className="col-start-3 bg-yellow-500 rounded-full rounded-tl-none" />
          </div>
        </div>
      </main>
    </LabLayout>
  );
};

export default UnorderedName;
