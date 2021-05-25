import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ProductStyles from "../styles/SingleAccessoryStyles";
import ProductGallery from '../components/ImageGallery';

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTeaAccessories } }) {
    
    // Deconstruct product data
    const teaAccessory = allSanityTeaAccessories.edges[0].node;

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

    // Function to loop through the product images object array and grab the image src URL's, remove all parameters and return them in a new array
    let findCleanProductURL = function(array) {
        let images = [];
        for (let i = array.length - 1; i >= 0; i--) {
            if (isValidURL(array[i].asset.url) === true) {
                if (array[i].asset.url.includes('http'))
                images.push({original:array[i].asset.url + "?w=600&h=600&fit=crop", thumbnail:array[i].asset.url + "?w=300&h=300&fit=crop"});
            }
        }
        return images.reverse();
    };
    // Create product images gallery for ImageGallery component below
    let productImages = findCleanProductURL(teaAccessory.imagesGallery);

    return (
      <ProductStyles>
        <div className="product">
            <h1 className="title">{teaAccessory.name}</h1>
            {/* <Img className="product-image" fluid={teaAccessory.imagesGallery[0].asset.fluid} alt={teaAccessory.name} /> */}
            <ProductGallery items={productImages} />
            <p className="full-price"><span className="price">{formatMoney(teaAccessory.price / 100)}</span> inc VAT</p>
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
                    data-item-id={teaAccessory.name}
                    data-item-price={teaAccessory.price}
                    data-item-url={`/shop/${teaAccessory.slug.current}`}
                    data-item-image={teaAccessory.imagesGallery[0].asset.url}
                    data-item-name={teaAccessory.name}
                    data-item-custom2-quantity={count}
                >
                Add to basket
                </button>
            </div>
            {/* <p className="full-price"><span className="price">{checkPrice === null ? "from " + formatMoney(productOptions[0].price / 100) : formatMoney(productPrice)}</span> inc VAT</p> */}
            <NewlineText 
                text={teaAccessory.description}
            />  
        </div>
      </ProductStyles>
    )
}

// Need to recreate the product page (https://cheekytea.co.uk/teashop/loose-tea/darjeeling-earl-grey/)

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityTeaAccessories(filter: {_id: {eq: $page}}) {
        edges {
            node {
                description
                name
                price
                slug {
                    current
                }
                imagesGallery {
                    asset {
                        url
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