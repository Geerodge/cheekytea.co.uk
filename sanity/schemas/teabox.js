import { ImDropbox as icon } from 'react-icons/Im';
import PriceInput from "../components/PriceInput";

export default {
    //Computer Name
    name: 'tea_box',
    // Visible Title
    title: 'Tea Box',
    type: 'document', 
    icon,
    fields: [
        {
            name: 'featured',
            title: 'Featured Product',
            type: 'boolean',
            description: 'Do you want to feature this product on the homepage?',
            options: {
                layout: 'checkbox'
            }
        },
        {
            name: 'sku',
            title: 'Product SKU',
            type: 'string',
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
            description: 'Description of the product',
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'text',
            description: 'Short description description of the tea',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of tea in pence',
            inputComponent: PriceInput, 
        },
        {
            name: 'tea',
            title: 'Teas In Box',
            type: 'array',
            description: 'Select the teas in this product.',
            of: [{  type: 'reference', to: [{ type: 'tea' }] }]
        },
        {
            name: 'tea_accessories',
            title: 'Tea Accessories In Box',
            type: 'array',
            description: 'Select the accessories in this product.',
            of: [{  type: 'reference', to: [{ type: 'tea_accessories' }] }]
        },
        {
            name: 'allergy',
            title: 'Allergy Information',
            type: 'boolean',
            description: 'Does this need the allergy warning?',
            options: {
                layout: 'checkbox'
            }
        },
        {
            title: 'Weight',
            name: 'weight',
            type: 'string',
            description: '(Grams)',
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