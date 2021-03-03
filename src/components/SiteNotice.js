import React from "react";
import styled from "styled-components";

const SiteNoticeStyles = styled.div`
    ul {
        list-style: none;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
        margin: 15px 0 15px 0;
        li {
            padding: 2rem;
        }
        li:nth-child(1) {
            border-bottom: 1px solid #f0f0f0;
        } 
        h5 {
            color: var(--green);
            font-weight: bold;
            text-transform: uppercase;
        }
        p {
            font-size: 1.75rem;
            margin: 5px;
        }
    }

    @media only screen and (min-width: 600px) {
        ul {
            grid-template-columns: 1fr 1fr;
            li:nth-child(1) {
                border-bottom: 0;
                border-right: 1px solid #f0f0f0;
            }
            li:nth-child(2) {
                border-left: 1px solid #f0f0f0;
            }
        }
    }
`;

export default function SiteNotice() {
    return (
        <SiteNoticeStyles>
            <ul>
                <li>
                    <h5>Free delivery</h5>
                    <p>On all UK orders over &#163;15</p>
                </li>
                <li>
                    <h5>Sustainably and ethically sourced tea</h5>
                    <p>Everything can be traced to source</p>
                </li>
            </ul>
        </SiteNoticeStyles>
    )
}