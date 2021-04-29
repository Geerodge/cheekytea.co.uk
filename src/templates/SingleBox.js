import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTea, allSanityTeaAccessories, allSanityTeaBox } }) {
    
    const teaProduct = allSanityTea.edges[0].node;
    // const teaAccessory = allSanityTeaAccessories.edges[0].node;
    // const teaBox = allSanityTeaBox.edges[0].node;

    console.log(allSanityTea.edges[0].node);

    return (
      <div>
        <h1>{page}</h1>
        ID: 
        Slug: {}
        {/* <Img fluid={product.} /> */}
      </div>
    )
}

// Need to recreate the product page (https://cheekytea.co.uk/teashop/loose-tea/darjeeling-earl-grey/)

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