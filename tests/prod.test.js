// const httpMocks = require('node-mocks-http')
// const joelproducts = require('../controllers/product')




// jest.setTimeout(30000)
// const data = {
//   data: [],
//   total_count: 0,
//   lookup: [],
// }

// // Mocking Service
// jest.mock('', () => {
//   const actualModule = jest.requireActual('../controllers/product.js')
//   return class extends actualModule {
//     handleGetAllProduct = jest.fn().mockImplementation(() => Promise.resolve())

//     // processEvent = jest.fn().mockImplementation(() => Promise.resolve('Hello'))

//     // update = jest.fn().mockImplementation(() => Promise.resolve('Update Successful'))
//   }
// })

// describe('products', () => {
//   describe('products', () => {
//     it('should return status 200', async () => {
//       // mocking request & response using HttpMocks
//       const req = httpMocks.createRequest()
//       const res = httpMocks.createResponse()
//       await joelproducts.handleGetAllProduct(req, res)
//       expect(res.statusCode).toBe(200)
//     })
//   })

// //   describe('post Order Projection: post', () => {
// //     it('should return status 200', async () => {
// //       // mocking request & response using HttpMocks
// //       const req = httpMocks.createRequest()
// //       const res = httpMocks.createResponse()
// //       req.body = data
// //       await OrderProjectionController.createOrderProjection.action(req, res)
// //       expect(res.statusCode).toBe(200)
// //     })
// //   })

// //   describe('post Order Projection: put', () => {
// //     it('should return status 200 with Update Successful Message', async () => {
// //       // mocking request & response using HttpMocks
// //       const req = httpMocks.createRequest()
// //       const res = httpMocks.createResponse()
// //       req.body = data
// //       await OrderProjectionController.updateOrderProjection.action(req, res)
// //       // eslint-disable-next-line no-underscore-dangle
// //       const resp = res._getData()
// //       expect(resp).toStrictEqual('Update Successful')
// //       expect(res.statusCode).toBe(200)
// //     })
// //   })

// //   describe('process event: post', () => {
// //     it('should return status 200 with passed Data', async () => {
// //       // mocking request & response using HttpMocks
// //       const req = httpMocks.createRequest()
// //       const res = httpMocks.createResponse()
// //       await OrderProjectionController.processEvent.action(req, res)
// //       // eslint-disable-next-line no-underscore-dangle
// //       const resp = res._getData()
// //       expect(JSON.parse(resp).active_records).toStrictEqual('Hello')
// //       expect(res.statusCode).toBe(200)
// //     })
// //   })

// //   describe('history Dates: get', () => {
// //     it('should return status 200', async () => {
// //       // mocking request & response using HttpMocks
// //       const req = httpMocks.createRequest()
// //       const res = httpMocks.createResponse()
// //       await OrderProjectionController.historyDates.action(req, res)
// //       expect(res.statusCode).toBe(200)
// //     })
// //   })

// //   describe('download Order Projection: get', () => {
// //     it('should return status 200 with no data present', async () => {
// //       // mocking request & response using HttpMocks
// //       const req = httpMocks.createRequest()
// //       const res = httpMocks.createResponse()
// //       await OrderProjectionController.downloadOrderProjection.action(req, res)
// //       // eslint-disable-next-line no-underscore-dangle
// //       const resp = res._getData()
// //       expect(JSON.parse(resp).response).toStrictEqual('no data present')
// //       expect(res.statusCode).toBe(200)
// //     })
//   })
