import React from "react";
import { InternalLink } from "../../atoms";
import LabLayout from "../../layouts/LabLayout";

import slackLogo from "../../../static/labs/slack-logo.jpg";
import mozillaOldLogo from "../../../static/labs/mozilla-old-logo.png";

const Labs = () => {
  return (
    <LabLayout title="Labs" className="text-nord-6 px-1">
      <ul className="container mx-auto">
        {LabsItems.map((item) => (
          <li
            key={item.to}
            className="grid gap-2 items-center py-8 border-b-2 border-nord-3"
            style={{
              gridTemplateColumns: "20rem 1fr",
              gridTemplateRows: "1fr auto",
            }}
          >
            <InternalLink
              to={item.to}
              className="col-span-2 sm:col-span-1 opacity-80 hover:opacity-100"
            >
              <img
                className="max-w-xl w-full object-cover rounded-lg"
                src={item.imageSrc}
                alt={item.title}
              />
            </InternalLink>
            <div className="py-6 px-4 row-start-2 sm:row-start-1 sm:col-start-2 col-span-2 sm:col-span-1 self-center justify-self-center text-center">
              <InternalLink to={item.to}>
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
    title: "Slack Logo",
    to: "slack-logo",
    description: "I copied the Slack Logo with CSS Grid. No regrets.",
    imageSrc: slackLogo,
  },
  {
    title: "Stacked Bars",
    to: "stacked-bars",
    description: "The reimplementation of an old Mozilla logo.",
    imageSrc: mozillaOldLogo,
  },
  {
    title: "Tschischold",
    to: "tschischold",
    description: "An experiment on responsive Bauhaus layout.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jan_Tschichold_(1963)_by_Erling_Mandelmann.jpg",
  },
];
