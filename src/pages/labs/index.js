import React from "react";
import { InternalLink } from "../../atoms";
import LabLayout from "../../layouts/LabLayout";

const Labs = () => {
  return (
    <LabLayout title="Labs" className="text-nord-6 px-1">
      <ul className="container mx-auto">
        {LabsItems.map((item) => (
          <li
            key={item.to}
            className="items-center py-8 border-b-2 border-nord-3"
          >
            <div className="py-6 px-4 row-start-2 sm:row-start-1 sm:col-start-2 col-span-2 sm:col-span-1 self-center justify-self-center text-center">
              <InternalLink to={item.to} className="hover:text-nord-13">
                <h2 className="text-4xl font-semibold font-family-secondary">
                  {item.title}
                </h2>
              </InternalLink>
              <p className="w-full mt-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </LabLayout>
  );
};

export default Labs;

const LabsItems = [
  {
    title: "Unordered Name",
    to: "tschischold",
    description: "Can we read names when letters aren't together?",
  },
  {
    title: "Slack Logo",
    to: "slack-logo",
    description: "I copied the Slack Logo with CSS Grid. No regrets.",
  },
  {
    title: "Stacked Bars",
    to: "stacked-bars",
    description: "The reimplementation of an old Mozilla logo.",
  },
  {
    title: "Tschischold",
    to: "tschischold",
    description: "An experiment on responsive Bauhaus layout.",
  },
];
