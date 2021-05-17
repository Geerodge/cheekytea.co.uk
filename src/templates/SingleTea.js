import React, { useState } from "react";
import Img from "gatsby-image";
import ProductStyles from "../styles/SingleTeaStyles";

// Product data is passed in via context in gatsby-node.js
export default function SingleProductPage({ pageContext: { page }, data: { allSanityTea } }) {

// Deconstruct product data
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

// Price format for Snipcart add to cart button
const snipcartPrice = teaProduct.product_options[0].price / 100;

// Track state of select element for product sizes and disables add to basket button if default value selected
const [selectedWeight, setWeight] = useState("Select Size");
function handleChange(e) {
    setWeight(e.target.value)
}




const arr = Object.keys(teaProduct.product_options[0])
            .map(function(key) {
                return [key,teaProduct.product_options[0][key]]
            });

console.log(arr);

// iterate over the user object
for (const key in teaProduct.product_options[0]) {
    if (teaProduct.product_options[0].hasOwnProperty(key)) {
        console.log(`${key}: ${teaProduct.product_options[0][key]}`);
    }
}



// const test = teaProduct.product_options.map((productOption,i) => (

// );

// console.log(test);






// 0 {
//     height: "230"
//     ​​
//     length: "160"
//     ​​
//     name: "Small Pack (50g)"
//     ​​
//     price: 399
//     ​​
//     weight: "50"
//     ​​
//     width: "10"
//     }

// collect the current selected weight for product
// check if that weight is in the products_options array
// if it is then get the price value from that array object




    return (
    <ProductStyles>
        <div className="product">
            <h1>{teaProduct.name}</h1>       
            <p><span className="vat">{formatMoney(teaProduct.product_options[0].price / 100)}</span> inc VAT</p>
            <Img fluid={teaProduct.image.asset.fluid} alt={teaProduct.name} />
            <div className="product-options">
                <select
                    onChange={handleChange}
                    name="sizes"
                    defaultValue={selectedWeight}
                >
                    <option disabled hidden value="Select Size">Select Size</option>
                        {teaProduct.product_options.map((product,i) => (
                            <option 
                                key={i}
                                value={product.weight}>{product.name}
                            </option>
                        ))}
                </select>
                <div className="quantity">
                    <button type="button" onClick={decrease}>-</button>
                    <input type="number" name="quantity" value={count} readOnly />
                    <button type="button" onClick={increase}>+</button>
                </div>
                <button 
                    type="button" 
                    className="snipcart-add-item addcart" 
                    disabled={selectedWeight === "Select Size" ? true : null}

                    // Snipcart magic. See https://docs.snipcart.com/v3/setup/products
                    // {selectedWeight} tracks weight selected from options dropdown
                    // {count} tracks product quantity using state from -/+ buttons
                    data-item-id={teaProduct.name}
                    data-item-price={snipcartPrice}
                    data-item-url={`/shop/${teaProduct.slug.current}`}
                    data-item-description={teaProduct.short_description}
                    data-item-image={teaProduct.image.asset.fixed.srcWebp}
                    data-item-name={teaProduct.name}
                    data-item-custom1-size={selectedWeight}
                    data-item-custom2-quantity={count}
                >
                    {selectedWeight === "Select Size" ? "Please select size" : "Add to basket"}
                </button>
            </div>
            <h2>Description</h2>
            <NewlineText 
                text={teaProduct.description}
            />
            <h2>Did You Know...</h2>
            <NewlineText 
                text={teaProduct.did_you_know}
            />
            <h2>Brewing Instructions</h2>
            <p>{teaProduct.brewing_instructions}</p>
            <h2>Ingredients</h2>
            <p>{teaProduct.ingredients}</p>
            <h2>Allergy Information</h2>
            <p>
                {teaProduct.allergy ? `Dairy free, gluten free, suitable for vegetarians and vegans. Packed in a factory which handles nuts.` : ``}
            </p>
        </div>
    </ProductStyles>
    )
}

