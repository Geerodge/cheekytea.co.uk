import React, { useState } from "react";
import { graphql } from "gatsby";
import ProductStyles from "../styles/SingleAccessoryStyles";
import ProductGallery from '../components/ImageGallery';
import SEO from "../components/seo";

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
        <SEO
            title={teaAccessory.name}
            description={teaAccessory.short_description}
        />
        <div className="product">
            <h1 className="mobile-title">{teaAccessory.name}</h1>
            <div className="image-container">
                <ProductGallery className="product-image" items={productImages} />
            </div>
            <div className="product-options">
                <h1 className="desktop-title">{teaAccessory.name}</h1>
                <p className="full-price"><span className="price">{formatMoney(teaAccessory.price / 100)}</span> inc VAT</p>
                <p className="short-description">
                    <NewlineText 
                        text={teaAccessory.short_description}
                    />  
                </p>
                <div className="quantity">
                    <button type="button" onClick={decrease}>-</button>
                    <input type="number" name="quantity" value={count} readOnly />
                    <button type="button" onClick={increase}>+</button>
                </div>
                <input type="hidden" name="sku" value={teaAccessory.sku} />
                <button 
                    type="button" 
                    className="snipcart-add-item addcart" 
                    
                    // Snipcart magic. See https://docs.snipcart.com/v3/setup/products
                    // {count} tracks product quantity using state from -/+ buttons
                    // data-item-id={teaAccessory._id}
                    // data-item-price={teaAccessory.price / 100}
                    // data-item-url={`https://cheekytea.co.uk/shop/${teaAccessory.slug.current}`}
                    // data-item-image={teaAccessory.imagesGallery[0].asset.url}
                    // data-item-name={teaAccessory.name}
                    // data-item-custom2-quantity={count}
                    // data-item-has-taxes-included="true"
                >
                Add to basket
                </button>
            </div>
            <div className="product-info">
                <h2>Description</h2>
                <NewlineText 
                    text={teaAccessory.description}
                />  
            </div>
        </div>
    </ProductStyles>
)
}

// This is dynamic based on the id passed in via context in gatsby-node.js
export const query = graphql`
query($page: String!) {
    allSanityTeaAccessories(filter: {_id: {eq: $page}}) {
        edges {
            node {
                _id
                name
                price
                description
                short_description
                sku
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