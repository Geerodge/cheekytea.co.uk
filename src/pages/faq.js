import React from "react";
import Accordion from "../components/Accordion";
import styled from "styled-components";
import { graphql } from "gatsby";

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