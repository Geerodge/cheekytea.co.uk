import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ProductStyles from "../styles/SingleBoxStyles";
import ImageGallery from 'react-image-gallery';
import ImageGalleryStyles from '../styles/ImageGalleryStyles';

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTeaBox } }) {

// Deconstruct product data
const teaBox = allSanityTeaBox.edges[0].node;
console.log(teaBox);
console.log(teaBox.imagesGallery);

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

// Save product image gallery to vairable
let productImages = teaBox.imagesGallery;

// Loop through the object array
// Grab the src image
// Create a small and large image using the crop options on the end of the URL
// Small image url (options on end of url): https://cdn.sanity.io/images/p410jtyo/production/f94e5432ae86ff5d2b2b558954210d504b72a1e3-1350x1350.jpg?w=300&h=300&fit=crop
// Large image url (no options on end of url): https://cdn.sanity.io/images/p410jtyo/production/f94e5432ae86ff5d2b2b558954210d504b72a1e3-1350x1350.jpg
// Put these images into an object array like below

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  

    return (
    <ProductStyles>
        <div className="product">
            <h1>{teaBox.name}</h1>
            <Img className="product-image" fluid={teaBox.imagesGallery[0].asset.fluid} alt={teaBox.name} />
            <ImageGalleryStyles>
                <ImageGallery items={images} showPlayButton={false} lazyLoad={true} showBullets={true} />
            </ImageGalleryStyles>
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