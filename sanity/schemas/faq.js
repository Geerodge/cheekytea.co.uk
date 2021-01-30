import { FaQuestion as icon } from 'react-icons/fa';

export default {
    //Computer Name
    name: 'faq',
    // Visible Title
    title: 'Frequently Asked Questions',
    type: 'document',
    icon, 
    fields: [
        {
            title: 'Question',
            name: 'question',
            type: 'string',
        },
        {
            title: 'Answer',
            name: 'answer',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        }
    ],
};