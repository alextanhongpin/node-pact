/*
 * client/mock-server/interactions.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const ONE_PRODUCT_BODY = [
  {
    name: 'Foo'
  }
]

const getProductList = {
  state: 'it has one product',
  uponReceiving: 'a request to retrieve product list',
  withRequest: {
    method: 'GET',
    path: '/products'
  },
  willRespondWith: {
    status: 200,
    body: ONE_PRODUCT_BODY
  }
}

module.exports = {
  getProductList
}
