import React from "react";
import styled from "styled-components";

const ShopStyles = styled.div`
    text-align: center;
    margin-top: 50px;
    hr {
        width: 70%;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 320px) {
        h1 {
            font-size: 1.5em;
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 2.5em;
        }
    }
`;

export default function Shop(props) {
    return (
        <ShopStyles>
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            <hr />
        </ShopStyles>
    )
}