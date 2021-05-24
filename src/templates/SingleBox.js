import React from "react";
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

// Create product images gallery for ImageGallery component below
let productImages = findCleanProductURL(teaBox.imagesGallery);
    return (
    <ProductStyles>
        <div className="product">
            <h1>{teaBox.name}</h1>
            <Img fluid={teaBox.imagesGallery[0].asset.fluid} alt={teaBox.name} />
            <ProductGallery items={productImages} />
            {/* <p className="full-price"><span className="price">{checkPrice === null ? "from " + formatMoney(productOptions[0].price / 100) : formatMoney(productPrice)}</span> inc VAT</p> */}
            <p>{teaBox.description}</p>
            <p>{teaBox.price}</p>
            <p>{teaBox.featured}</p>
            <p>{teaBox.allergy}</p>
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
                featured
                allergy
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
                        }
                    }
                }
            }
        }
    }
}
`;