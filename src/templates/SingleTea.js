import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Need to recreate the product page (https://cheekytea.co.uk/teashop/loose-tea/darjeeling-earl-grey/)

// Need to put the product information bit into a component




// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTea } }) {
    const teaProduct = allSanityTea.edges[0].node;

    // Makes the price of each product look nice
    const formatMoney = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format;

    // Creates paragraph text from \n\n
    function NewlineText(props) {
        const text = props.text;
        return text.split('\n\n').map((item, i) => <p key={i}>{item}</p>);
    }

    // Counter for product quantity
    const [count, setCount] = useState(1);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        if(count > 1) {
            setCount(count - 1);
        }
    }

    return (
      <div>
        <h1>{teaProduct.name}</h1>
        <p>from {formatMoney(teaProduct.price / 100) + ' inc VAT'}</p>
        <NewlineText text={teaProduct.description} />
        <Img fluid={teaProduct.image.asset.fluid} />
        <h2>Did You Know...</h2>
        <NewlineText text={teaProduct.did_you_know} />
        <h2>Brewing Instructions</h2>
        <p>{teaProduct.brewing_instructions}</p>
        <h2>Ingredients</h2>
        <p>{teaProduct.ingredients}</p>
        <h2>Allergy Information</h2>
        <p>{teaProduct.allergy ? `Dairy free, gluten free, suitable for vegetarians and vegans. Packed in a factory which handles nuts.` : ``}</p>
        <select >
            <option disabled hidden selected>Select Size</option>
            {teaProduct.tea_weight.map((productSize,i) => (
                <option key={i} value={productSize.weight}>{productSize.name}</option>))}
        </select>
        <div className="quantity-container">
            <button type="button" onClick={decrease}>-</button>
            <input type="number" name="quantity" value={count} />
            <button type="button" onClick={increase}>+</button>
        </div>
      </div>
    )
}

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityTea(filter: {_id: {eq: $page}}) {
        edges {
            node {
                _id
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
}
`;