import { SiGitea as icon } from 'react-icons/si';
import PriceInput from "../components/PriceInput";

export default {
    //Computer Name
    name: 'tea_accessories',
    // Visible Title
    title: 'Tea Accessories',
    type: 'document', 
    icon,
    fields: [
        {
            name: 'featured',
            title: 'Featured Accessory',
            type: 'boolean',
            description: 'Do you want to feature this tea accessory on the homepage?',
            options: {
                layout: 'checkbox'
            }
        },
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            description: 'Name of the product',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'imagesGallery',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the tea',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of tea in pence',
            inputComponent: PriceInput, 
        },
        {
            name: 'accessory_weight',
            title: 'Accessory Weight',
            type: 'array',
            description: 'Select the product weight.',
            of: [{  type: 'reference', to: [{ type: 'weight' }] }]
        },
        {
            name: 'accessory_dimension',
            title: 'Accessory Dimensions',
            type: 'array',
            description: 'Select the product size.',
            of: [{  type: 'reference', to: [{ type: 'dimension' }] }]
        },
    ],
};