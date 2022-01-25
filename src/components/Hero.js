import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";

const HeroStyles = styled.div`

    header {
        display: grid;
        grid-template-areas: "hero";
        height: 60vh;
        max-height: 600px;
        place-items: center;
        text-align: center;
        overflow: hidden;
        > * {
            grid-area: hero;
        }
        div {
            z-index: 1;
        }
        h2 {
            color: var(--white);
            font-weight: bold;
            font-size: 1.5rem;
            padding: 20px;
        }
        p {
            line-height: 1.65;
            color: var(--white);
            font-weight: bold;
            padding: 20px;
        }
    }
    .gatsby-image-wrapper {
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 0;
        & img {
            filter: brightness(80%);
        }
    }
    a.button {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #FFFFFF;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 500;
        color: #000000;
        background-color: #FFFFFF;
        transition: all 0.2s;
        &:hover{
            color: #FFFFFF;
            background-color: unset;
        }
    }
    @media all and (max-width: 30em) {
        header {
            a.button {
                display: block;
                margin: 0.4em auto;
            }
        }
    }

    @media only screen and (min-width: 320px) {
        header {
            a.button {
                width: 60%;
            }
        }
    }

    @media only screen and (min-width: 480px) {
        header {
            p span {
                padding: 0.45rem;
            }
            a.button {
                width: 50%;
            }
            h2 {
                font-size: 2em;
            }
        }
    }

    @media only screen and (min-width: 600px) {
        header {
            p {
                font-size: 3rem;
            }
            p span {
                padding: 0.55rem;
            }
            a.button {
                width: 35%;
            }
        }
    }

    @media only screen and (min-width: 992px) {
        header {
            a.button {
                width: 25%;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        header {
            a.button {
                width: 15%;
            }
            h2 {
                font-size: 2.5em;
            }
        }
    }
`;

export default function Hero(props) {
    return (
        <HeroStyles>
            <header>
                <div>
                    <h2>{props.heading}</h2>
                    <p>{props.subheading}</p>
                    {props.button == null ? '' : <Link className="button" to={props.link}>{props.button}</Link>}
                </div>
                <Img fluid={props.imgsrc} alt={props.alt} />
            </header>
        </HeroStyles>
    )
}