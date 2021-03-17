require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });

module.exports = {
    siteMetadata: {
        title: 'Cheeky Tea',
        siteUrl: 'https://cheekytea.co.uk',
        description: 'Improve your wellbeing and help protect the planet with our loose leaf tea.',
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-image`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            // Name of plugin adding
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'p410jtyo',
                dataset: 'production',
                token: process.env.SANITY_TOKEN,
                watchMode: true,
            },
        }
    ],
};


// SANITY_PROJECT_ID=p410jtyo
// SANITY_DATASET=production

// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

// export default {
//         siteMetadata: {
//         title: 'Cheeky Tea',
//         siteUrl: 'https://cheekytea.co.uk',
//         description: 'Improve your wellbeing and help protect the planet with our loose leaf tea.',
//         },
//         plugins: [
//             'gatsby-plugin-styled-components', 
//             {
//                 // Name of plugin adding
//                 resolve: 'gatsby-source-sanity',
//                 options: {
//                     projectId: 'p410jtyo',
//                     dataset: 'production',
//                     token: process.env.SANITY_TOKEN,
//                     watchMode: true,
//                 }
//             }
//         ],
// };