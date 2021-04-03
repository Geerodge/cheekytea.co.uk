exports.createPages = async function turnTeasIntoPages({ graphql, actions }) {
    const { data } = await graphql(`
        query {
            teas: allSanityTea {
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    //Create pages dynamically
    data.teas.forEach(teas => {
        const slug = teas.nodes.slug.current
        const id = teas.nodes.id
        actions.createPages ({
            path: slug,
            component: require.resolve(`./src/templates/SingleProduct.js`),
            context: {id},
        })
    })
}







// import path, { resolve } from `path`;

// async function turnTeasIntoPages({ graphql, actions }) {
//     // 1. Get a template for this page
//     const productTemplate = path.resolve(`./src/templates/Product.js`);
//     // 2. Query for all data
//     const { data } = await graphql(`
//         query {
//             teas: allSanityTea {
//                 nodes {
//                     name
//                     slug {
//                         current
//                     }
//                 }
//             }
//         }
//     `);
//     console.log(data);
//     // 3. Loop[ over each product and create a page for that product
//     data.teas.nodes.forEach((teas) => {
//         console.log(`Creating a page for `, teas.name);
//     });
// }

// export async function createPages(params) {
//     //Create pages dynamically
//     // 1. Teas/products
//     await turnTeasIntoPages(params);
//     // 2. Helpful information pages
//     // 3. Blog?
// }