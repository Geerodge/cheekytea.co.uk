import React from "react";
import Accordion from "../components/Accordion";
import styled from "styled-components";
import { graphql } from "gatsby";
import SEO from "../components/seo";

const FaqStyles = styled.div`
    text-align: center;
    margin-top: 50px;
    hr {
        width: 70%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

export default function FaqPage(props) {
    const faqs = props.data.faqs.nodes;
    return (
        <>
            <SEO
                title="Frequently Asked Questions"
                description="Got questions about our tea or company in general? We’ve got answers! Check out our frequently asked questions or contact us today and we'll be happy to help."
            />
            <FaqStyles>
                <h1>Frequently Asked Questions</h1>
                <p>Got Questions? We’ve Got Answers!</p>
                <hr />
            </FaqStyles>
            <Accordion
                faqs={faqs}
            />
        </>
    )
}

export const query = graphql`
    query FaqQuery {
        faqs: allSanityFaq {
            nodes {
                id
                question
                _rawAnswer
                answer {
                    children {
                        text
                        marks
                        _type
                        _key
                    }
                }
            }
        }
    }
`;