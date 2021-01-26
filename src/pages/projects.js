import React from "react";
import { DefaultLayout } from "../layouts";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    description
                    id
                    name
                    openGraphImageUrl
                    updatedAt
                    url
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes;
  return (
    <DefaultLayout>
      <header className="">
        <h1
          className="
          mt-5
          font-clearface-bold font-semibold
          text-xl text-center
          uppercase
          "
        >
          Selection of Works
        </h1>
        <hr className="mt-3 mx-auto h-0.5 w-7/12 bg-nord-8" />
      </header>
      <ul className="mt-5 grid gap-16 grid-cols-2">
        {repos.map((repo) => (
          <li key={repo.id} className="mt-1">
            <a href={repo.url}>
              <div className="bg-nord-6 m-1 antialiased text-nord-0 shadow-xl rounded-lg overflow-hidden ">
                <img
                  class="h-72 w-full object-cover"
                  src={repo.openGraphImageUrl}
                  alt={repo.name}
                />
                <div className="p-1">
                  {/* EYEBROW-TEXT
                    Emphasise title by de-emphasising the next text. */}
                  {/* <span className="bg-nord-7 text-nord-9 text-xs uppercase font-semibold tracking-wide px-2 rounded-full inline-block">
                    New
                  </span> */}
                  {/* Move things down and reduce line-height (leading-tight) */}
                  <div className="flex justify-between">
                    <h4 class="mt-2 ml-2 font-semibold text-lg leading-tight">
                      {repo.name}
                    </h4>
                    <span class="mr-2 text-xs">
                      {" "}
                      {repo.stargazers.totalCount} ⭐️
                    </span>
                  </div>

                  <div className="mt-2 ml-2">{repo.description}</div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

export default Projects;
