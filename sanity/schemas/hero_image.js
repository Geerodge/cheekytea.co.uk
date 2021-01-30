import { MdImage as icon } from 'react-icons/md';

export default {
    //Computer Name
    name: 'hero_image',
    // Visible Title
    title: 'Hero Image',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'subheading',
            title: 'Sub-heading',
            type: 'string',
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
            name: 'alt',
            title: 'Alt Attribute',
            type: 'string',
        },
        {
            name: 'button',
            title: 'Button Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Button Link',
            type: 'url',
        },
    ],
};