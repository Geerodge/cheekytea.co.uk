import { ImDropbox as icon } from 'react-icons/Im';

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
    ],
};