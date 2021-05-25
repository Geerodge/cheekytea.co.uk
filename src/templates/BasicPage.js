import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import styled from 'styled-components';

const BasicPageStyles = styled.div`

    margin: 20px;

    h1 {
        margin-bottom: 40px;
        text-align: center;
    }
    h2 {
        margin-top: 40px;
    }
    ul {
        margin-left: 20px;
    }
`;

// Product data is passed in via context in gatsby-node.js
export default function BasicPage({ pageContext: { page }, data: { allSanityBasicPages } }) {

    // Deconstruct page data
    const basicPage = allSanityBasicPages.edges[0].node;

    const serializers = {
        types: {
            code: (props) => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
            ),
        },
    }

    return (
        <BasicPageStyles>
            <h1>{basicPage.name}</h1>
            <BlockContent
                blocks={basicPage._rawContent}
                serializers={serializers}
            />
        </BasicPageStyles>
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
              _rawContent
              slug {
                current
              }
            }
          }
        }
      }
`;