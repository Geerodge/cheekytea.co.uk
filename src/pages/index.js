import React from "react";
import Hero from "../components/Hero";
import ShopHeading from "../components/shop/ShopHeading";
import { graphql } from "gatsby";
import Products from "../components/shop/Products";
import SEO from "../components/seo";

export default function IndexPage(props) {
  const heroImage = props.data.heroimages.nodes;
  const teas = props.data.teas.nodes;
  const accessories = props.data.accessories.nodes;
  const teabox = props.data.teabox.nodes;
    return (
      <>
        <SEO
            title="Tea For A Better World"
            description="We’ve sourced some of the best loose-leaf teas, from around the world, and created our own unique blends, so you can enjoy the perfect cuppa. Explore our teas today!"
        />
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
                product_options {
                    width
                    weight
                    price
                    name
                    length
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
