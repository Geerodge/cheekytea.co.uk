import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import PortableText from "@sanity/block-content-to-react";

const AccordionStyles = styled.div`
    h2 {
        display: inline;
    }
    .accordion {
        cursor: pointer;
        width: 70%;
        margin: 0 auto;
    }
    .accordion-header {
        padding: 10px;
        &:hover {
            background-color: #eee;
        }
    }
    p {
        margin-left: 35px;
    }
    a {
        text-decoration: none;
        color: var(--black);
        text-decoration: underline;
        &:hover {
            color: var(--green);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
    }
`;

function SingleAccordion({ faqs }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    {isOpen ? <FiChevronDown /> : <FiChevronRight />}<h2>{faqs.question}</h2>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <PortableText
                            blocks={faqs._rawAnswer}
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
                {faqs.map((faqs) =>
                    <SingleAccordion key={faqs.id} faqs={faqs} />
                )}
            </AccordionStyles>
        </>
    );
}