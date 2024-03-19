const httpMocks = require('node-mocks-http')
const joelproducts = require('../controllers/product')


jest.setTimeout(30000)
const data = {
  data: [],
  total_count: 0,
  lookup: [],
}


const {MongoClient} = require('mongodb');
 beforeAll(async () => {
   connection = await MongoClient.connect('mongodb://localhost:27017/testing');
   db = await connection.db('mongodb://localhost:27017/testing');
 });
 afterAll(async () => {
   await connection.close();
 });

// Mocking Service
jest.mock('', () => {
  const actualModule = jest.requireActual('../controllers/product.js')
  return class extends actualModule {
    handleGetAllProduct = jest.fn().mockImplementation(() => Promise.resolve())
  }
})

describe('products', () => {
    it('should return status 200', async () => {
      // mocking request & response using HttpMocks
      const req = httpMocks.createRequest()
      const res = httpMocks.createResponse()
      joelproducts.handleGetAllProduct(req, res)
      expect(res.statusCode).toBe(200)
    })
})

describe('Error', () => {
  
describe('products', () => {
   it('should return status 500', async () => {
        // mocking request & response using HttpMocks
        const req = httpMocks.createRequest()
        const res = httpMocks.createResponse()
        await joelproducts.handleGetAllProduct(req, res)
        expect(res.statusCode).toBe(500)
      })
  })

describe('error for handleCreateNewProduct', () => {
    it('should return status 500', async () => {
        // mocking request & response using HttpMocks
        const req = httpMocks.createRequest()
        const res = httpMocks.createResponse()
        await joelproducts.handleCreateNewProduct(req, res)
        expect(res.statusCode).toBe(500)
      })
  })

  describe('error for handleUpdateProduct', () => {
    it('should return status 500', async () => {
        // mocking request & response using HttpMocks
        const req = httpMocks.createRequest()
        const res = httpMocks.createResponse()
        await joelproducts.handleUpdateProduct(req, res)
        expect(res.statusCode).toBe(500)
      })
  })
  })

