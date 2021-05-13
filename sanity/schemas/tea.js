import { GiTeapotLeaves as icon } from 'react-icons/gi';

export default {
    //Computer Name
    name: 'tea',
    // Visible Title
    title: 'Teas',
    type: 'document', 
    icon,
    fields: [
        {
            name: 'featured',
            title: 'Featured Tea',
            type: 'boolean',
            description: 'Do you want to feature this tea on the homepage?',
            options: {
                layout: 'checkbox'
            }
        },
        {
            name: 'name',
            title: 'Tea Name',
            type: 'string',
            description: 'Name of the tea',
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
            name: 'image',
            title: 'Image',
            type: 'image',
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
            name: 'short_description',
            title: 'Shop Description',
            type: 'text',
            description: 'Short description of the tea for shop page',
        },
        {
            name: 'brewing_instructions',
            title: 'Brewing Instructions',
            type: 'text',
            description: 'Add the brewing instructions for this tea',
        },
        {
            name: 'did_you_know',
            title: 'Did you know?',
            type: 'text',
            description: 'Interesting information about the tea',
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'string',
            description: 'Ingredients of the tea',
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
            name: 'product_options',
            title: 'Product Options',
            type: 'array',
            description: 'Select the product options.',
            of: [{  type: 'reference', to: [{ type: 'options' }] }]
        },
    ],
};