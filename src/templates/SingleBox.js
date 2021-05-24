import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ProductStyles from "../styles/SingleBoxStyles";
import ProductGallery from '../components/ImageGallery';

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTeaBox } }) {

// Deconstruct product data
const teaBox = allSanityTeaBox.edges[0].node;

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

// Validate string is a URL
function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

// Remove all parameters from a URL
function stripUrl(urlToStrip){
    let stripped = urlToStrip.split('?')[0];
    stripped = stripped.split('&')[0];
    stripped = stripped.split('#')[0];
    return stripped;
};

// Function to loop through the product images object array and grab the image src URL's, remove all parameters and return them in a new array
let findCleanProductURL = function(array) {
    let images = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (isValidURL(array[i].asset.fluid.src) === true) {
            if (array[i].asset.fluid.src.includes('?'))
            images.push({original:stripUrl(array[i].asset.fluid.src) + "?w=600&h=600&fit=crop", thumbnail:stripUrl(array[i].asset.fluid.src) + "?w=300&h=300&fit=crop"});
        }
    }
    return images.reverse();
};

// Collect all included products and return to an array
let collectIncludedProducts = function(array) {
    let products = [];
    for (let i = array.length - 1; i >= 0; i--) {
        products.push(array[i].name)
    }
    return products.reverse();
}
let includedProducts = collectIncludedProducts(teaBox.tea);

// Collect all included accessories and return to an array
let collectIncludedAccessories = function(array) {
    let accessories = [];
    for (let i = array.length - 1; i >= 0; i--) {
        accessories.push(array[i].name)
    }
    return accessories.reverse();
}
let includedAccessories = collectIncludedAccessories(teaBox.tea_accessories);

// Create product images gallery for ImageGallery component below
let productImages = findCleanProductURL(teaBox.imagesGallery);
console.log(teaBox);
    return (
    <ProductStyles>
        <div className="product">
            <h1>{teaBox.name}</h1>
            <Img className="product-image" fluid={teaBox.imagesGallery[0].asset.fluid} alt={teaBox.name} />
            {/* <ProductGallery items={productImages} /> // For now not using this as it's broken */}
            <p className="full-price"><span className="price">{formatMoney(teaBox.price / 100)}</span> inc VAT</p>
            <div className="product-options">
                <div className="quantity">
                    <button type="button" onClick={decrease}>-</button>
                    <input type="number" name="quantity" value={count} readOnly />
                    <button type="button" onClick={increase}>+</button>
                </div>
                <button 
                    type="button" 
                    className="snipcart-add-item addcart" 
                    
                    // Snipcart magic. See https://docs.snipcart.com/v3/setup/products
                    // {count} tracks product quantity using state from -/+ buttons
                    data-item-id={teaBox.name}
                    data-item-price={teaBox.price}
                    data-item-url={`/shop/${teaBox.slug.current}`}
                    data-item-image={teaBox.tea[0].image.asset.fluid.src}
                    data-item-name={teaBox.name}
                    data-item-custom2-quantity={count}
                >
                Add to basket
                </button>
            </div>
            {/* <p className="full-price"><span className="price">{checkPrice === null ? "from " + formatMoney(productOptions[0].price / 100) : formatMoney(productPrice)}</span> inc VAT</p> */}
            <NewlineText 
                text={teaBox.description}
            />
            <h2>Inside The Cheeky Tea Box</h2>
            <p>{includedProducts.length} packs of tea (50g each):</p>
            {includedProducts.map((name,i) => (
                <li>{name}</li>
            ))}
            <p>Accessories:</p>
            {includedAccessories.map((name,i) => (
                <li>{name}</li>
            ))}       
        </div>
    </ProductStyles>
    )
}

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityTeaBox(filter: {_id: {eq: $page}}) {
        edges {
            node {
                name
                description
                price
                slug {
                    current
                }
                tea {
                    name
                    short_description
                    description
                    image {
                        asset {
                            fluid {
                                src
                            }
                        }
                    }
                }
                imagesGallery {
                    asset {
                        fluid {
                            src
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                tea_accessories {
                    description
                    name
                }
            }
        }
    }
}
`;