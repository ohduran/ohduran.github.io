import React from "react";

const ExternalComment = ({ href, avatarUrl, username, date, children }) => (
  <a href={href}>
    <div
      className="my-5 md:my-12 mx-auto md:ml-20 md:mr-0 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm"
      style={{
        maxWidth: "60ch",
      }}
    >
      <div className="ml-2">
        <div className="w-full bg-nord-1 px-2 py-4 rounded-t-xl flex">
          <figure>
            <img
              className="rounded-full h-6"
              src={avatarUrl}
              alt={`${username} avatar`}
            />
          </figure>
          <h3 className="ml-1 font-family-secondary text-nord-4">
            <span className="font-semibold text-nord-6">{username}</span>{" "}
            commented on <span>{date}</span>
          </h3>
        </div>
        <div className="w-full border-2 border-nord-1 bg-nord-4 shadow-lg">
          <p className="mx-4 my-4 text-nord-3">{children}</p>
        </div>
      </div>
    </div>
  </a>
);

export default ExternalComment;
