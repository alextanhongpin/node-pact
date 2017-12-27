
const { Verifier } = require('@pact-foundation/pact')
const path = require('path')

const opts = {
  providerBaseUrl: 'http://localhost:3001', // Where your service will be running during the test, either staging or localhost on CI
  providerStatesSetupUrl: 'http://localhost:3001/test/setup', // The url to call to setup states
  pactUrls: ['http://localhost:80/pacts/provider/ProductService/consumer/Client/latest'],
  publishVerificationResult: true,
  providerVersion: '1.0.0'
}

new Verifier().verifyProvider(opts).then(() => {
  console.log('success')
  process.exit(0)
}).catch((error) => {
  console.log('failed:', error)
  process.exit(1)
})
