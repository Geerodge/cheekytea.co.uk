import { GiWeight as icon } from 'react-icons/gi';

export default {
    //Computer Name
    name: 'weight',
    // Visible Title
    title: 'Product Weights',
    type: 'document',
    icon, 
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'Name this weight',
        },
        {
            title: 'Weight',
            name: 'weight',
            type: 'string',
            description: '(Grams)',
        },
    ],
};