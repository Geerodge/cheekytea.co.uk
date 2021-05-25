import React from "react";
import { graphql } from "gatsby";

// Product data is passed in via context in gatsby-node.js
export default function BasicPage({ pageContext: { page }, data: { allSanityBasicPages } }) {

    // Deconstruct page data
    const basicPage = allSanityBasicPages.edges[0].node;

    return (
        <>
        <h1>It's working!</h1>
        <p>{basicPage.name}</p>
        </>
    )
}

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityBasicPages(filter: {_id: {eq: $page}}) {
        edges {
            node {
                id
                name
                slug {
                    current
                }
                content {
                    children {
                        text
                    }
                }
            }
        }
    }
}
`;