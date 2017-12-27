const app = require('../product-service.js')
const products = require('../model/products')

const port = process.env.PORT || 3001

app.post('/test/setup', (req, res) => {
  const state = req.body.state
  switch (state) {
    case 'it has one product':
      products.create({name: 'Foo', img: 'https://something.png', price: 1, stock: 1})
      break
    default:
      break
  }
  res.end()
})

app.listen(port, (err) => {
  if (err) {
    throw err
  }
  console.log('SERVER: Product Service listening at', port)
})
