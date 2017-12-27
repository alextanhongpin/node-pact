const products = require('./model/products')

function get (req, res) {
  res.json([{name: 'Foo'}])
  // res.json(products.getAll())
}

function create (req, res) {
  const product = req.body
  const savedProduct = products.create(product)
  res.status(201).json(savedProduct)
}

module.exports = {
  get, create
}
