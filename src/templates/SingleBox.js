import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTeaBox } }) {
    
    const teaBox = allSanityTeaBox.edges[0].node;

    console.log(teaBox);

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