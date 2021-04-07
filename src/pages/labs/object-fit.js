import React from "react";
import LabLayout from "../../layouts/LabLayout";

const ObjectFit = () => {
  return (
    <LabLayout
      background=""
      title="CSS Explorations: Object-fit"
      description="Les Demoiselles d'Avignon. Pablo Picasso, 1907. Fitted into 50%, 24rem, using the object-cover property."
      article={true}
    >
      <main className="min-h-screen flex items-center justify-center">
        <img
          className="w-1/2 h-96 object-cover object-top"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/700px-Les_Demoiselles_d%27Avignon.jpg"
          alt="Fitted into 50%, 24rem"
        />
      </main>
    </LabLayout>
  );
};

export default ObjectFit;
