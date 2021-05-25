import { RiPagesLine as icon } from 'react-icons/ri';

export default {
    //Computer Name
    name: 'basic_pages',
    // Visible Title
    title: 'Basic Pages',
    type: 'document', 
    icon,
    fields: [
        {
            name: 'name',
            title: 'Page Name',
            type: 'string',
            description: 'Name of the page',
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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
            ]
        }
    ],
};