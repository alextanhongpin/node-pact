/* eslint-env mocha */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const provider = require('./mock-server/provider')
const client = require('./client')
const interactions = require('./mock-server/interactions')

const expect = chai.expect
chai.use(sinonChai)

describe('Product handling', () => {
  const sandbox = sinon.createSandbox()

  before(async function () {
    this.timeout(10000) // It takes time to start the mock server
    await provider.setup()
  })

  afterEach(() => {
    sandbox.restore()
  })

  after(async function () {
    this.timeout(10000) // It takes time to stop the mock server and gather the contracts
    await provider.finalize()
  })

  describe('#getAllProducts', () => {
    it('should get product list from server', async function () {
      await provider.addInteraction(interactions.getProductList)

      // const consoleSpy = sandbox.spy(console, 'log')
      const name = await client.getAllProducts()
      expect(name).to.be.equal('Foo')
      // expect(consoleSpy).to.have.been.calledWith('CLIENT: Current products are: Foo')
      await provider.verify()
    })
  })
})
