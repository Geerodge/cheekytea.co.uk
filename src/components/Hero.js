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
            font-weight: bold;
            background: rgba(89, 155, 68, 0.6);
            padding: 0.5rem;
        }
        p {
            font-size: 3rem;
            font-weight: bold;
        }
        span {
            background: rgba(89, 155, 68, 0.6);
            padding: 0.5rem;
        }
        /* button {
            background-color: var(--white);
            color: var(--black);
            &:hover {
                background: var(--green);
                color: var(--white);
            }
        } */
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
        &:hover{
            color:#000000;
            background-color:#FFFFFF;
        }
    }
    @media all and (max-width:30em) {
    a.button{
        display:block;
        margin:0.4em auto;
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