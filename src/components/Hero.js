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
        h1 {
            background: rgba(89, 155, 68, 0.6);
            padding: 0.5rem;
        }
        p {
            font-size: 2.5rem;
            line-height: 1.65;
        }
        span {
            background: rgba(89, 155, 68, 0.6);
            padding: 0.5rem;
        }
    }
    .gatsby-image-wrapper {
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 0;
    }
    .glow {
        color: var(--white);
        text-shadow: 1px 1px 0px #fff, 2px 2px 1px rgba(0,0,0,0.70);
        margin: 30px 10px;
    }
    a.button {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #FFFFFF;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight:500;
        color:#FFFFFF;
        transition: all 0.2s;
        width: 60%;
        &:hover{
            color:#000000;
            background-color:#FFFFFF;
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

    @media only screen and (min-width: 480px) {
        header {
            p span {
                padding: 0.45rem;
            }
            a.button {
                width: 50%;
            }
        }
        .glow {
            margin: 50px 10px;
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
        .glow {
            margin: 50px;
        }
    }

    @media only screen and (min-width: 1200px) {
        header {
            a.button {
                width: 15%;
            }
        }
        .glow {
            margin: 70px;
        }
    }
`;

export default function Hero(props) {
    return (
        <>
            <HeroStyles>
                <header>
                    <div>
                        <h1 className="glow">{props.heading}</h1>
                        <p className="glow"><span>{props.subheading}</span></p>
                        {props.button == null ? '' : <Link className="button" to={props.link}>{props.button}</Link>}
                    </div>
                    <Img fluid={props.imgsrc} alt={props.alt} />
                </header>
            </HeroStyles>
        </>
    )
}