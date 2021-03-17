import React from "react";
import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./footer/Footer";
import Nav from "./Nav"
import SiteNotice from "./SiteNotice";
import Typography from "../styles/Typography";

const SiteBorderStyles = styled.div`
    max-width: 1500px;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23599b44' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 1rem;
    padding: 10px;
    padding: clamp(5px, 1vw, 10px);
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
    border: 5px solid white;
    margin: 75px auto;
`;

const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
    return (
        <>
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
        </>
    )
}