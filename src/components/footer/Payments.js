import React from "react";
import styled from "styled-components";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";


const PaymentStyles = styled.div`
    text-align: center;
    margin-top: 20px;
    ul {
        list-style: none;
        font-size: 2rem;
    } 
    li {
        display: inline;
        margin: 2px;
        opacity: 0.5;
    }
    li:last-child {
        margin: -4px;
    }
    p {
        font-size: 1.5rem;
    }
`;


export default function Payments(props) {
    return (
        <PaymentStyles>
            <p>Most payment methods accepted</p>
            <ul>
                <li>
                    <FaCcVisa size={props.size} />
                </li>
                <li>
                    <FaCcMastercard size={props.size} />
                </li>
                <li>
                    <SiAmericanexpress size={props.size} />
                </li>
                <li>
                    <FaCcPaypal size={props.size} />
                </li>
                <li>
                    <FaBitcoin size={props.size} />
                </li>
                <li>
                    <FaEthereum size={props.size} />
                </li>
            </ul>
        </PaymentStyles>
    )
};