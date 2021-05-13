import { FaRulerCombined as icon } from 'react-icons/fa';

export default {
    //Computer Name
    name: 'dimension',
    // Visible Title
    title: 'Product Dimensions',
    type: 'document',
    icon, 
    fields: [
        {
            title: 'Size',
            name: 'size',
            type: 'string',
            description: 'Name this size',
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