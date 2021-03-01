import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { graphql, Link } from "gatsby";
import { FaRecycle } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { GiTeapotLeaves } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const AboutStyles = styled.div`
    text-align: center;
    margin-top: 50px;
    hr {
        width: 70%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    h1 {
        width: 50%;
        margin: 0 auto;
    }
    .react-icons {
        vertical-align: middle;
        margin-bottom: 10px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 2rem;
        grid-template-areas:
            "section1 section1"
            "section2 section3"
            "section4 section4"
            "section5 section6"
            "section7 section8";
    }
    .section1 { 
        grid-area: section1;
        place-self: center;
        text-align: left;
        padding: 0 50px;
        h2 {
            display: inline;
            padding-right: 10px;
        }
    }
    .section2 { 
        grid-area: section2;
    }
    .section3 { 
        grid-area: section3;
        text-align: left;
        padding: 0 50px;
        h2 {
            display: inline;
            padding-right: 10px;
        }
    }
    .section4 { 
        grid-area: section4;
        place-self: center;
        width: 75%;
        h2 {
            padding-top: 10px;
        }
        hr:first-child {
            margin-top: 25px;
        }
    }
    .section5 { 
        grid-area: section5;
        text-align: left;
        padding: 50px;
        ul {
            margin-left: 20px;
        }
        h2 {
            display: inline;
            padding-right: 10px;
        }
    }
    .section6 { 
        grid-area: section6;
        text-align: left;
        padding: 50px;
        place-self: center;
    }
    .section7 { 
        grid-area: section7;
        text-align: left;
        padding: 50px;
        h2 {
            display: inline;
            padding-right: 10px;
        }
    }
    .section8 { 
        grid-area: section8;
        text-align: left;
        padding: 50px;
        h2 {
            display: inline;
            padding-right: 10px;
        }
        li {
            padding: 10px;
        }
        img {
            margin-top: 50px;
        }
    }
`;

export default function AboutPage(props) {
    const heroImage = props.data.heroimages.nodes;
    return (
        <>
            <AboutStyles>
                <h1>About Us</h1>
                <p>Promoting positive mental health, sustainability and great tea.</p>
                <hr />
                <Hero key={heroImage[0]._id}
                    heading={heroImage[0].headline}
                    subheading={heroImage[0].subheading}
                    link={heroImage[0].link}
                    button={heroImage[0].button}
                    imgsrc={heroImage[0].image.asset.fluid}
                    alt={heroImage[0].alt} 
                />
                <div className="grid-container">
                    <div className="section1">
                        <h2>Our Loose Leaf Tea</h2><GiTeapotLeaves size={42} className="react-icons" />
                        <p>We’ve sourced some of the best loose-leaf teas, from around the world, and created our own unique blends, so you can enjoy the perfect cuppa.</p>
                        <p>We believe that the enjoyment of a cuppa doesn’t just lie within the quality of the tea leaf (although it is important!), it’s also about taking the time to enjoy the moment.</p>
                        <p><Link to="/shop">Visit our tea shop now</Link> and grab yourself a cheeky cuppa!</p>
                    </div>
                    <div className="section2">
                        <img alt="George McEntegart" src="https://cheekytea.co.uk/wp-content/uploads/2019/02/girl-drinking-tea-1024x681.jpg" max-width="100%" width="500" />
                    </div>
                    <div className="section3">
                        <h2>Making Time for You</h2><BiTimeFive size={32} className="react-icons" />
                        <p>Rushing through life without paying much attention to the present moment or the world around us is all too easy.</p>
                        <p>Some people call it awareness, others wellness. Whatever you want to call it, there are simple “good habits” and activities that can help reconnect ourselves with our bodies and the sensations they experience.</p>
                        <p>There are steps you can take to develop and improve your mental wellbeing, and we want to help.</p>      
                        <p><a href="https://tinyletter.com/CheekyTea" target="_blank" rel="noreferrer">Subscribe to our newsletter</a> to stay informed about our new content, deals and more.</p>
                    </div>
                    <div className="section4">
                        <hr />
                        <BiDonateHeart size={42} className="react-icons" />
                        <h2>10% of Profits Donated to Help People, Animals and the Planet</h2>
                        <p>Every time you buy from Cheeky Tea you’re helping to erase the stigma around mental health, and create a world where people and wildlife can thrive together.</p>
                        <p>We donate 5% of our yearly profits to the mental health charity <a href="https://www.mind.org.uk/" target="_blank" rel="noreferrer">Mind</a>, and a further 5% towards <a href="https://www.wwf.org.uk/who-we-are" target="_blank" rel="noreferrer">WWF</a>; the world’s leading independent conservation organisation.</p>
                        <hr />
                    </div>
                    <div className="section5">
                        <h2>Sustainably and Ethically Sourced</h2><FaRecycle size={32} className="react-icons" />
                        <p>All our teas are carefully sourced from tea estates, tea farmers and trusted suppliers around the world, then hand blended and packed back in the United Kingdom.</p>
                        <ul>
                            <li>Everything can be traced back to source.</li>
                            <li>All new ingredients are visually screened and tasted on delivery.</li>
                            <li>Our teas are <a href="https://www.wwf.org.uk/who-we-are" target="_blank" rel="noreferrer">SALSA</a> (Safe and Local Supplier Approved) and <a href="https://www.soilassociation.org/" target="_blank" rel="noreferrer">Soil Association</a> accredited.</li>
                        </ul>
                    </div>
                    <div className="section6">
                        <img src="https://cheekytea.co.uk/wp-content/uploads/2020/04/sustainably-sourced-1024x682.jpg" max-width="100%" width="500" />
                    </div>
                    <div className="section7">
                        <h2>Packaging and Environmental Impact</h2><FaLeaf size={32} className="react-icons" />
                        <p>All of our postal envelopes are made from quality recycled 450gsm cardboard, with a frustration free opening cord, and are 100% recyclable.</p>
                        <p>Our postal cardboard boxes are also 100% recyclable and made from <a href="https://www.fsc-uk.org/en-uk" target="_blank" rel="noreferrer">FSC® certified</a> environmentally friendly material.</p>
                        <p>The pouches for our loose leaf tea provide excellent barrier properties against water vapour and oxygen. This makes them the preferred packaging option for a wide range of industries where product freshness and shelf life are a priority, and our laminates are all FDA food grade approved.</p>
                        <p>Due to the resealable nature of the pouches, they offer a number of convenient advantages and helps promote product freshness by providing an air tight seal.</p>
                        <p>There is also no need to decant our tea into alternative containers, as it can be stored for any length of time in the pouches.</p>
                        <p>Our pouches also offer a variety of economic and environmental advantages compared to rigid formats of packaging. They are cheaper and less polluting to manufacture, transport and store. Due to their resealable nature they are also reusable.</p>
                    </div>
                    <div className="section8">
                        <h2>Sustainable Packaging Strategy</h2><GoPackage size={32} className="react-icons" />
                        <p>Each year in the EU, <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php/Packaging_waste_statistics" target="_blank" rel="noreferrer">more than 160kg</a> of packaging waste is generated for each inhabitant. For going green, this area should be a top priority.</p>
                        <p>Our sustainable packaging strategy has three key elements:</p>
                        <ul>
                            <li><strong>Appropriately sized packaging:</strong> this means less room is needed in the delivery van, and our carbon footprint is kept to a minimum.</li>
                            <li><strong>Sustainable materials that are easy to dispose of responsibly:</strong> where possible we use Forest Stewardship Council (FSC) and the Programme for the Endorsement of Forest Certification (PEFC) approved materials. These indicate that the materials are responsibly sourced and 100% recyclable.</li>
                            <li><strong>Less packaging:</strong> we make the right choices to eliminate (or at least, significantly reduce) the need for filler.</li>
                        </ul>
                        <img src="https://cheekytea.co.uk/wp-content/uploads/2019/02/organic-salsa-soil-1024x273.jpg" max-width="100%" width="700" />
                    </div>
                </div>
            </AboutStyles>
        </>
    )
}

export const query = graphql`
    query HeroImageQuery {
        heroimages: allSanityHeroImage(filter: {name: {eq: "About"}}) {
          nodes {
            _id
            alt
            button
            headline
            link
            subheading
            image {
                  asset {
                    fluid(maxWidth: 1200) {
                      ...GatsbySanityImageFluid
                    }
                  }
              }
          }
        }
    }
`;