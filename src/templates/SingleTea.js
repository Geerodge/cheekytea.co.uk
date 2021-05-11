import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ProductStyles = styled.div`

    @media only screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4rem;
        grid-template-areas:
            "product-picture product-detail"
            "product-info product-info";

        margin-top: 50px;
        .product-picture {
            grid-area: product-picture;
        }
        .product-detail {
            grid-area: product-detail;
            .vat {
                font-size: 3rem;
            }
        }
        .product-info {
            grid-area: product-info;
        }

        .options {
            margin: 5px;
            max-width: 250px;
            min-width: 250px;
            input {
                max-width: 100px;
            }
            input[type=number]::-webkit-inner-spin-button, 
            input[type=number]::-webkit-outer-spin-button { 
                -webkit-appearance: none; 
                margin: 0; 
            }
            input[type=number] {
                width: 45px;
                height: 36px;
                text-align: center;
            }
        }
        .quantity {
            margin: 0px;
            button {
                padding: 1rem 2rem;
                margin: 5px;
            }
        }
        .sizes {
            height: 36px;
        }
        .addcart {
            height: 36px;
        }
    }

`;

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
    <ProductStyles>
        <div className="product-picture">
            <Img fluid={teaProduct.image.asset.fluid} alt={teaProduct.name} />
        </div>
        <div className="product-detail">
            <h1>{teaProduct.name}</h1>
            <p><span className="vat">from {formatMoney(teaProduct.price / 100)}</span> inc VAT</p>
            <NewlineText text={teaProduct.description} />
            <select className="sizes options">
                <option disabled hidden selected>Select Size</option>
                {teaProduct.tea_weight.map((productSize,i) => (
                    <option key={i} value={productSize.weight}>{productSize.name}</option>))}
            </select>
            <div className="quantity options">
                <button type="button" onClick={decrease}>-</button>
                <input type="number" name="quantity" value={count} />
                <button type="button" onClick={increase}>+</button>
            </div>
            <button type="button" className="addcart options">Add to basket</button>
        </div>
        <div className="product-info">
            <h2>Did You Know...</h2>
            <NewlineText text={teaProduct.did_you_know} />
            <h2>Brewing Instructions</h2>
            <p>{teaProduct.brewing_instructions}</p>
            <h2>Ingredients</h2>
            <p>{teaProduct.ingredients}</p>
            <h2>Allergy Information</h2>
            <p>{teaProduct.allergy ? `Dairy free, gluten free, suitable for vegetarians and vegans. Packed in a factory which handles nuts.` : ``}</p>
        </div>
    </ProductStyles>
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
                        fluid(maxWidth: 700) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
}
`;