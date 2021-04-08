import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page, slug, type }, props }) {
    // const pageId = page.id
    // const product = props.data.product.nodes;
    // console.log(pageId);
    console.log(page);
    console.log(slug);
    console.log(type);
    return (
      <div>
        <p>Single Product!!</p>
        ID: 
        Slug: {type}
        {/* <Img fluid={product.} /> */}
      </div>
    )
}

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityTea(filter: {_id: {eq: $page}}) {
        edges {
            node {
                did_you_know
                featured
                description
                brewing_instructions
                allergy
                ingredients
                name
                price
                short_description
                tea_dimension {
                    width
                    size
                    length
                    height
                }
                tea_weight {
                    weight
                    name
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
    }
    allSanityTeaAccessories(filter: {_id: {eq: $page}}) {
        edges {
            node {
                description
                name
                price
                featured
                accessory_weight {
                    weight
                    name
                }
                accessory_dimension {
                    width
                    size
                    length
                    height
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
    allSanityTeaBox(filter: {_id: {eq: $page}}) {
        edges {
            node {
                description
                name
                price
                featured
                allergy
                weight {
                    weight
                    name
                }
                tea_dimension {
                    width
                    size
                    length
                    height
                }
                tea_accessories {
                    name
                    description
                }
                tea {
                    name
                    short_description
                    description
                    image {
                        asset {
                            fluid {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
                imagesGallery {
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
}
`;