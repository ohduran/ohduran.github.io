import React from "react";
import LabLayout from "../../layouts/LabLayout";

const InitialLetter = () => {
  return (
    <LabLayout
      background=""
      title="CSS Explorations: First Letter"
      description="Exploring how can I use ::first-letter and initial-letter with TailwindCSS (short answer: you can't). See it with Safari browser."
      article={true}
    >
      <main className="min-h-screen flex items-center justify-center">
        <div className="w-4/12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl big-initial-first-letter">
            Empty your mind, be formless. Shapeless, like water. If you put
            water into a cup, it becomes the cup. You put water into a bottle
            and it becomes the bottle. You put it in a teapot, it becomes the
            teapot. Now, water can flow or it can crash. Be water, my friend.
          </p>
        </div>
      </main>
    </LabLayout>
  );
};

export default InitialLetter;
