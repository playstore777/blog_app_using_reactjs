import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// console.log("services/index.js :", process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

export const getPosts = async () => {
    console.log("services/index.js");
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    cursor
                    node {
                        author {
                            name
                            id
                            bio
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
};
