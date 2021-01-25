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

  console.log(repos);
  return (
    <DefaultLayout>
      <header className="">
        <h1
          className="
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
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

export default Projects;

// <div class=>
//
//       <div >
//         <div >
//           <!-- EYEBROW-TEXT
//           Emphasise title by de-emphasising the next text.
//           Try using an even smaller text, uppercase with bold text
//           and a little letter separation (tracking-wide) -->
//
//           <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
//             Venice · Italy
//           </div>
//         </div>

//        <!-- Move things down and reduce line-height (leading-tight) -->
//         <h4 class="mt-2 font-semibold text-lg leading-tight">Clothing made for a true contemporary woman</h4>
//         <div class="mt-1">
//           $39.99
//           <span class="text-gray-600 text-sm"> / month</span>
//         </div>
//         <div class="mt-2 flex items-center">
//       <svg class="fill-current h-6 w-6 text-teal-500">
//   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star">
//   <path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/>
// </svg>
//           <svg class="fill-current h-6 w-6 text-teal-500">
//       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star">
//       <path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/>
//     </svg>
//           <svg class="fill-current h-6 w-6 text-teal-500">
//       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star">
//       <path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/>
//     </svg>
//           <svg class="fill-current h-6 w-6 text-teal-500">
//       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star">
//       <path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/>
//     </svg>
//           <svg class="fill-current h-6 w-6 text-gray-400">
//       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star">
//       <path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/>
//     </svg>
//
//         </div>
//       </div>
//     </div>
