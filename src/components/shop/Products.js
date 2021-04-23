import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ProductStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const SingleProductStyles = styled.div`
    display: grid;
    /* Take row sizing from ProductStyles not SingleProduct */
    @supports not (grid-template-rows: subgrid) {
        grid-template-rows: auto auto 1fr;
    }
    grid-row: span 1;
    grid-gap: 1rem;
    h2, p {
        margin: 0;
        text-align: center;
    }
    a.product-heading-link {
        text-decoration: none;
        color: var(--black);
        &:hover {
            color: var(--green);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            text-decoration: underline;
        }
    }
    button {
        margin: 0 10px;
        }
`;

// Makes the price of each product look nice
const formatMoney = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
}).format;


function SingleTea({ teas }) {
    return (
        <SingleProductStyles>
            <Link to={`/shop/${teas.slug.current}`}>
                <Img fluid={teas.image.asset.fluid} alt={teas.name} />
            </Link>
            <Link className="product-heading-link" to={`/shop/${teas.slug.current}`}>
                <h2>{teas.name}</h2>
            </Link>
            <p>from {formatMoney(teas.price / 100) + ' inc VAT'}</p>
            {/* <p className="tea-description">{teas.short_description.substring(0, 200)}</p> */}
            <button>Add to basket</button>
        </SingleProductStyles>
    )
}

function SingleAccessory({ accessories }) {
    const productImages = accessories.imagesGallery;
    const mainImage = productImages[0].asset.fluid;
    // const hoverImage = productImages[1].asset.fluid;
    return (
        <SingleProductStyles>
            <Link to={`/shop/${accessories.slug.current}`}>
                <Img fluid={mainImage} alt={accessories.name} />
            </Link>
            <Link className="product-heading-link" to={`/shop/${accessories.slug.current}`}>
                <h2>{accessories.name}</h2>
            </Link>
            <p>{formatMoney(accessories.price / 100) + ' inc VAT'}</p>
            {/* <p className="tea-description">{teas.short_description.substring(0, 200)}</p> */}
            <button>Add to basket</button>
        </SingleProductStyles>
    )
}

function TeaBox({ teabox }) {
    const productImages = teabox.imagesGallery;
    const mainImage = productImages[0].asset.fluid;
    return (
        <SingleProductStyles>
            <Link to={`/shop/${teabox.slug.current}`}>
                <Img fluid={mainImage} alt={teabox.name} />
            </Link>
            <Link className="product-heading-link" to={`/shop/${teabox.slug.current}`}>
                <h2>{teabox.name}</h2>
            </Link>
            <p>{formatMoney(teabox.price / 100) + ' inc VAT'}</p>
            {/* <p className="tea-description">{teas.short_description.substring(0, 200)}</p> */}
            <button>Add to basket</button>
        </SingleProductStyles>
    )
}

export default function Products({ teas, accessories, teabox }) {
    return (
        <ProductStyles>
            {teas.map((teas) =>
                <SingleTea key={teas._id} teas={teas} />
            )}
            {accessories.map((accessories) =>
                <SingleAccessory key={accessories._id} accessories={accessories} />
            )}
            {teabox.map((teabox) =>
                <TeaBox key={teabox._id} teabox={teabox} />
            )}
        </ProductStyles>
    )
}