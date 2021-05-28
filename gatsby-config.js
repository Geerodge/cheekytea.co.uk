require("dotenv").config({
    path: `.env`,
  });

module.exports = {
    siteMetadata: {
        title: 'Tea For A Better World',
        titleTemplate: "%s | Cheeky Tea",
        url: 'https://cheekytea.co.uk',
        description: 'Improve your wellbeing and help protect the planet with our loose leaf tea.',
        image: "/images/logo.png",
        twitterUsername: "@cheekyteashop"
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-image`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'p410jtyo',
                dataset: 'production',
                token: process.env.SANITY_TOKEN,
                watchMode: true,
            },
        },
        {
            resolve: `gatsby-plugin-snipcart-advanced`,
            options: {
                version: "3.0.29",
                publicApiKey: process.env.GATSBY_SNIPCART_API_KEY,
                defaultLang: "en-GB",
                currency: "GBP",
                openCartOnAdd: false,
                useSideCart: true,
            },
        },
    ],
};