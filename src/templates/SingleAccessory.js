import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTeaAccessories } }) {
    
    const teaAccessory = allSanityTeaAccessories.edges[0].node;

    console.log(teaAccessory);

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
}
`;