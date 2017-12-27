const path = require('path')
const { Pact } = require('@pact-foundation/pact')

const provider = new Pact({
  consumer: 'Client',
  provider: 'ProductService',
  port: 1234,
  log: path.resolve(__dirname, 'logs', 'mockserver-integration.log'),
  logLevel: 'ERROR',
  dir: path.resolve(__dirname, 'pacts'),
  spec: 2
})

module.exports = provider
