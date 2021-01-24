exports.githubApiQuery = `
query($github_login: String!){
    user(login: $github_login){
        login
        name
        repositories(first:4, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC){
            nodes{
                id
                owner{
                    login
                }
                name
                description
                url
                updatedAt
                forkCount
                openGraphImageUrl
                stargazers{
                    totalCount
                }
                readme: object(expression: "master:README.md"){
                    ... on Blob{
                        text
                    }
                }
                licenseInfo{
                    id
                    name
                    nickname
                }
                primaryLanguage{
                    name
                }
                languages(first: 10){
                    nodes{
                        name
                    }
                }
            }
        }
    }
}
`;
