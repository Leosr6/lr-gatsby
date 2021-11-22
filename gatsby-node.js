exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allProductListJson {
        nodes {
          ProductID
          PictureURL
          Name
          Price
          Retail_Price
        }
      }
    }
  `)
  data.allProductListJson.nodes.forEach(product => {
    actions.createPage({
      path: `/${product.ProductID}`,
      component: require.resolve(`./src/templates/ProductDetailPage.tsx`),
      context: { product },
    })
  })
}
