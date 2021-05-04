import React from "react";
import styled from "styled-components";
import { FaFacebookSquare as FacebookIcon, FaInstagram as InstagramIcon, FaTwitterSquare as TwitterIcon, FaPinterestSquare as PinterestIcon } from "react-icons/fa";


const SocialStyles = styled.div`
    text-align: center;
    margin: 30px 0px;
    ul {
        list-style: none;
        font-size: 2rem;
    } 
    li {
        display: inline;
    }
    svg {
        color: var(--green);
        &:hover {
            transition: all 0.2s;
            color: var(--black);
        }
    }
`;


export default function SocialIcons(props) {
    return (
        <SocialStyles>
            <ul>
                <li>
                    <a href="https://www.facebook.com/cheekyteashop/" target="_blank" rel="noreferrer">
                        <FacebookIcon size={props.size} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cheekyteashop/" target="_blank" rel="noreferrer">
                        <InstagramIcon size={props.size} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/cheekyteashop" target="_blank" rel="noreferrer">
                        <TwitterIcon size={props.size} />
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.co.uk/cheekyteashop/" target="_blank" rel="noreferrer">
                        <PinterestIcon size={props.size} />
                    </a>
                </li>
                {/* <li>
                    <a href="https://tinyletter.com/CheekyTea" target="_blank" rel="noreferrer">
                        <EmailIcon size={props.size} />
                    </a>
                </li> */}
            </ul>
        </SocialStyles>
    )
};