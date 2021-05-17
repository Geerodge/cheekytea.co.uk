import React from "react";
import { graphql } from "gatsby";
import ShopHeading from "../components/shop/ShopHeading";
import Products from "../components/shop/Products";

export default function ShopPage(props) {
    const teas = props.data.teas.nodes;
    const accessories = props.data.accessories.nodes;
    const teabox = props.data.teabox.nodes;
    console.log(teas[0].product_options[0].price)
    return (
        <>
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
        )
}

export const query = graphql`
    query ProductsQuery {
        teas: allSanityTea {
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
                product_options {
                    width
                    weight
                    price
                    name
                    length
                    height
                }
                slug {
                    current
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
        accessories: allSanityTeaAccessories {
            nodes {
                _id
                description
                name
                price
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
        teabox: allSanityTeaBox {
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
