const path = require(`path`)

// Query product page data and create pages
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryTeas = await graphql(`
        query {
            teas: allSanityTea {
                nodes {
                    _id
                    slug {
                        current
                    }
                }
            }
        }
    `);
    const queryAccessories = await graphql(`
        query {
            accessories: allSanityTeaAccessories {
                nodes {
                    _id
                    slug {
                        current
                    }
                }
            }
        }
    `);
    const queryTeabox = await graphql(`
        query {
            teabox: allSanityTeaBox {
                nodes {
                    _id
                    slug {
                        current
                    }
                }
            }
        }
    `);
    const queryPage = await graphql(`
        query {
            page: allSanityBasicPages {
                nodes {
                    _id
                    slug {
                        current
                    }
                }
            }
        }
    `);
    // Page template paths
    const productTea = path.resolve(`src/templates/SingleTea.js`)
    const productAccessory = path.resolve(`src/templates/SingleAccessory.js`)
    const productBox = path.resolve(`src/templates/SingleBox.js`)
    const blankPage = path.resolve(`src/templates/BasicPage.js`)
    // Create pages
    queryTeas.data.teas.nodes.forEach(node => {
        createPage({
        path: `/shop/${node.slug.current}`,
        component: productTea,
        context: {
            // Passing the page slug and id as context, rest of data is collected on page template
            slug: node.slug.current,
            page: node._id,
        },
        })
    })
    //Create tea accessory product pages
    queryAccessories.data.accessories.nodes.forEach(node => {
        createPage({
        path: `/shop/${node.slug.current}`,
        component: productAccessory,
        context: {
            // Passing the page slug and id as context, rest of data is collected on page template
            slug: node.slug.current,
            page: node._id,
        },
        })
    })
    //Create teabox product pages
    queryTeabox.data.teabox.nodes.forEach(node => {
        createPage({
        path: `/shop/${node.slug.current}`,
        component: productBox,
        context: {
            // Passing the page slug and id as context, rest of data is collected on page template
            slug: node.slug.current,
            page: node._id,
        },
        })
    })
    //Create basic pages
    queryPage.data.page.nodes.forEach(node => {
        createPage({
        path: `/${node.slug.current}`,
        component: blankPage,
        context: {
            // The entire page is passed down as context
            slug: node.slug.current,
            page: node._id,
        },
        })
    })
}