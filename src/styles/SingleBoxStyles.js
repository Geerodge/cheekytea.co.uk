import styled from 'styled-components';

const SingleBoxStyles = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "product";

    .product-options {
        margin-bottom: 20px;

        select {
            width: 100%;
            margin-bottom: 20px;
            padding: 15px;
            background-color: white;
            border: 1px solid #e1e2e2;
        }
        .addcart {
            width: 100%;
            margin: 20px 0px;
            padding: 15px;
        }
        .addcart:disabled{
            background:  #fff;
            color: #ccc;
            cursor: no-drop;
            border: 1px solid #e1e2e2;
        }
    }

    .quantity {
        display: grid;
        grid-template-columns: 25% 50% 25%;
        grid-template-rows: 1fr;

        border: 1px solid #e1e2e2;

        button {
            padding: 15px 0 15px 0;
            background-color: var(--white);
            color: var(--black);
            font-weight: bold;
            font-size: 28px;
        }
        button:first-child {
            border-radius: 4px 0px 0px 4px;
            border-right: 1px solid #e1e2e2;
        }
        button:last-child {
            border-radius: 0px 4px 4px 0px;
            border-left: 1px solid #e1e2e2;
        }
        input {
            text-align: center;
            border: none;
        }
        input:focus {
            margin: 0 5px 0 5px;
        }
    }

    /* Hides the silly default arrows/spinners from input type number */
    /* Chrome, Safari, Edge, Opera */
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .price {
        font-size: 3rem;
    }

    .product-image {
        margin-top: 20px;
    }

    .product {
        .title {
            margin-bottom: 20px;
        }
    }

    .product-image {
        margin-top: 20px;
    }

    .mobile-title {
        display: block;
    }
    
    .desktop-title, .short-description {
        display: none;
    }

    .image-container {
        margin: 20px;
    }

    @media only screen and (min-width: 768px) {

        .product {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas:
            "image-container product-options"
            "product-info product-info";

            .mobile-title {
                display: none;
            }
        }

        .product-image { 
            grid-area: product-image;
            margin: 20px;
        }
        .product-options { 
            grid-area: product-options;
            margin: 20px;
        }
        .product-info { 
            grid-area: product-info;
            margin: 20px 20px 0px 20px;
        }

        .short-description {
            display: block;
            margin: 40px 0px;
        }

        .desktop-title {
            display: block;
        }

    }

    @media only screen and (min-width: 1000px) {
    }

`;

export default SingleBoxStyles;