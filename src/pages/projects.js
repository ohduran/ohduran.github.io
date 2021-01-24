import React from "react";
import { DefaultLayout } from "../layouts";
import { useStaticQuery } from "gatsby";

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
                    forkCount
                    id
                    name
                    openGraphImageUrl
                    updatedAt(fromNow: true)
                    url
                    primaryLanguage {
                      name
                    }
                    languages {
                      nodes {
                        name
                      }
                    }
                    readme {
                      text
                    }
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

  console.log(repos);
  return (
    <DefaultLayout>
      <ul className="grid grid-gap-4 grid-cols-2">
        {repos.map((repo) => (
          <li key={repo.id} className="mt-5 grid grid-cols-2">
            <img className="" src={repo.openGraphImageUrl} />
            {repo.name}: {repo.description} -{" "}
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

export default Projects;
