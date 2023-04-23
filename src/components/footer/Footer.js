import React from "react";
import Banner from "../Banner";
import FooterSections from "./FooterSections";
import SocialIcons from "./SocialMedia";
import Payments from "./Payments";

export default function Footer() {
    return (
        <footer>
            <Banner />
            <hr />
            <FooterSections />
            <hr />
            <SocialIcons size={40} />
            <p style={{ textAlign: "center", lineHeight: "2.5rem" }}>&copy; {new Date().getFullYear()} Cheeky Tea Ltd.<br /> Registered in England No. 13125952.<br /> All Rights Reserved.</p>
            <Payments size={30} />
            <p>Created by <a href="https://georgemc.net/">George</a></p>
        </footer>
    )
}