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
        `gatsby-plugin-react-helmet`,
        `gatsby-image`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
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
                openCartOnAdd: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "UA-127744125-1", // Google Analytics / GA
                "880579346", // Google Ads / Adwords / AW
              ],
            },
          },
    ],
};