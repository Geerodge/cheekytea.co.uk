import React from "react";
import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./footer/Footer";
import Nav from "./Nav"
import SiteNotice from "./SiteNotice";
import Typography from "../styles/Typography";
import SEO from './seo';
import { CartProvider } from 'use-shopping-cart'

const SiteBorderStyles = styled.div`
    max-width: 1200px;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23599b44' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 1rem;
    padding: 10px;
    padding: clamp(5px, 1vw, 10px);
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
    border: 5px solid white;

    @media only screen and (min-width: 1200px) {
        margin: clamp(2rem, 2vw, 12rem) auto 4rem;
    }

    @media only screen and (min-width: 1824px) {
        margin: 75px auto;
    }
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
    return (
        <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
            successUrl="stripe.com"
            cancelUrl="twitter.com/geerodge"
            currency="GBP"
            allowedCountries={['GB']}
            billingAddressCollection={true}
        >
            <SEO />
            <GlobalStyles />
            <Typography />
            <SiteBorderStyles>
                <ContentStyles>
                    <Nav />
                    <SiteNotice />
                    {children}
                    <Footer />
                </ContentStyles>
            </SiteBorderStyles>
        </CartProvider>
    )
}