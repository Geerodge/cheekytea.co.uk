import React from "react";
import Hero from "../components/Hero";
import ShopHeading from "../components/shop/ShopHeading";
import { graphql } from "gatsby";
import Products from "../components/shop/Products";


export default function IndexPage(props) {
  const heroImage = props.data.heroimages.nodes;
  const teas = props.data.teas.nodes;
  const accessories = props.data.accessories.nodes;
  const teabox = props.data.teabox.nodes;
    return (
      <>
        <Hero key={heroImage[0]._id}
          heading={heroImage[0].headline}
          subheading={heroImage[0].subheading}
          link={heroImage[0].link}
          button={heroImage[0].button}
          imgsrc={heroImage[0].image.asset.fluid}
          alt={heroImage[0].alt} 
        />
        <ShopHeading 
          heading="Shop for the Perfect Cup of Tea"
          subheading="Explore our loose-leaf teas, created from only the finest whole leaves of tea."
        />
        <Products
            teas={teas}
            accessories={accessories}
            teabox={teabox}
        />
      </>
    );
}

export const query = graphql`
    query FeaturedProductsHeroImageQuery {
        heroimages: allSanityHeroImage(filter: {name: {eq: "Homepage"}}) {
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
        teas: allSanityTea(filter: {featured: {eq: true}}) {
            nodes {
                name
                price
                description
                short_description
                brewing_instructions
                allergy
                _id
                did_you_know
                ingredients
                featured
                slug {
                    current
                }
                tea_dimension {
                    length
                    size
                    width
                    height
                }
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                          }
                    }
                }
            }
        }
        accessories: allSanityTeaAccessories(filter: {featured: {eq: true}}) {
            nodes {
                _id
                description
                name
                price
                featured
                slug {
                    current
                  }
                accessory_dimension {
                    height
                    width
                    length
                }
                accessory_weight {
                    weight
                }
                imagesGallery {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
        teabox: allSanityTeaBox(filter: {featured: {eq: true}}) {
            nodes {
                description
                allergy
                name
                price
                _id
                featured
                slug {
                    current
                }
                imagesGallery {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;
