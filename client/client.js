const request = require('request-promise-native')

const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || 'http://localhost:1234'

async function getAllProducts () {
  const products = await request(`${PRODUCTS_SERVICE_URL}/products`).then(JSON.parse)
  // console.log('CLIENT: Current products are:', products[0].name)
  return products[0].name
}

module.exports = {
  getAllProducts
}
