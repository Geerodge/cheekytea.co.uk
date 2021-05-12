import { CgOptions as icon } from 'react-icons/cg';
import PriceInput from "../components/PriceInput";

export default {
    //Computer Name
    name: 'options',
    // Visible Title
    title: 'Product Options',
    type: 'document',
    icon, 
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'Name this product option',
        },
        {
            title: 'Weight',
            name: 'weight',
            type: 'string',
            description: '(In Grams and numbers only)',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of tea in pence',
            inputComponent: PriceInput, 
        },
        {
            title: 'Length',
            name: 'length',
            type: 'string',
            description: '(Millimeters)',
        },
        {
            title: 'Width',
            name: 'width',
            type: 'string',
            description: '(Millimeters)',
        },
        {
            title: 'Height',
            name: 'height',
            type: 'string',
            description: '(Millimeters)',
        },
    ],
};