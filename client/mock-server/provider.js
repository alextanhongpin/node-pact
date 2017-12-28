const path = require('path')
const { Pact } = require('@pact-foundation/pact')

const CLIENT_PORT = 1234

const provider = new Pact({
  consumer: 'Client',
  provider: 'ProductService',
  port: CLIENT_PORT,
  logLevel: 'ERROR',
  spec: 2,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts')
})

module.exports = provider
