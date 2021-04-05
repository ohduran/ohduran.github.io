import React from "react";
import LabLayout from "../../layouts/LabLayout";

const ViewPorts = () => {
  return (
    <LabLayout
      background=""
      title="CSS Explorations: Viewport units"
      description="Exploring viewport units: no matter what the browser size is, the main block is always the height of the browser."
      article={true}
    >
      <main className="flex h-screen">
        <h1 className="text-xl m-auto">I work with my friends.</h1>
      </main>
    </LabLayout>
  );
};

export default ViewPorts;
