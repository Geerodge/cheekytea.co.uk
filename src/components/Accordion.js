import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import PortableText from "@sanity/block-content-to-react";

const serializers = {
    types: {
        code: (props) => (
        <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
        </pre>
        ),
    },
}

const AccordionStyles = styled.div`
    h2 {
        display: inline;
    }
    .accordion {
        cursor: pointer;
        margin: 15px auto;
    }
    .accordion-header {
        padding: 10px;
        &:hover {
            background-color: #eee;
        }
    }

    @media only screen and (min-width: 360px) {
        .accordion-body p {
            margin-left: 0px;
        }
    }

    @media only screen and (min-width: 750px) {
        .accordion {
            width: 70%;
        }
        .accordion-body p {
            margin-left: 35px;
        }
    }
`;

function SingleAccordion({ faqs, index }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="accordion">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyDown={() => setIsOpen(!isOpen)}
                    className="accordion-header"
                    role="button"
                    aria-pressed="false"
                    tabIndex={index}
                >
                    {isOpen ? <FiChevronDown /> : <FiChevronRight />}<h2>{faqs.question}</h2>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <PortableText
                            blocks={faqs._rawAnswer}
                            serializers={serializers}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default function Accordion({ faqs }) {
    return (
        <>
            <AccordionStyles>
                {faqs.map((faqs, index) =>
                    <SingleAccordion key={faqs.id} faqs={faqs} index={index} />
                )}
            </AccordionStyles>
        </>
    )}