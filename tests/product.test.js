const mongoose = require("mongoose");
const request = require("supertest");
const app =require("../index")


require("dotenv").config();



let productId;


const {MongoClient} = require('mongodb');
 beforeAll(async () => {
   connection = await MongoClient.connect('mongodb://localhost:27017/testing');
   db = await connection.db('mongodb://localhost:27017/testing');
 });

 afterAll(async () => {
   await connection.close();
 });



describe("check root",()=>{
    it("should be hey web ",async ()=>{
        const res= await request(app).get("/");
        expect(res.text).toBe('hello web')
    })
})


describe("check /joel",()=>{
    it("/joel check ",async ()=>{
        const res= await request(app).get('/joel');
        expect(res.text).toBe('hi this is joel ')
    })
})


describe("GET /product", () => {
    it("should return all products", async () => {
      const token = process.env.TOKEN;
      const res = await request(app).get("/product").set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });   
  });

  
  
  
  describe("GET /product/:id", () => {
    it("should return a product", async () => {
      const token = process.env.TOKEN;
      const res = await request(app)
      .get(
        "/product/65ea88ef1a1d91b496924260"
      ).set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.sampleName).toBe("updatePass");
    });
    it("Fail: invaild product Id", async () => {
      const token = process.env.TOKEN;
      const res = await request(app).get(
          "/product/65ea98fdb0cd528ef6e325"
        ).set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(400);
      });
   });
  
  
  
   describe("POST /product", () => {
    it("should create a product", async () => {
      const token = process.env.TOKEN;
      const res = await request(app).post("/product").send(
        {
                    sampleName:"test123",
                    sampleNumber:5454555,
                    sampleVendor:{
                        id:1856,
                        name:"test"
                    },
                    externalReference:{
                        id:"CB145",
                        source:"new"
                    }
                })
                .set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('_id');
      productId = res.body._id;
      console.log('Created product with _id:', productId);
      
    }); 
  });
  
  
  
  describe("PUT /products/:id", () => {

    it("should update a product", async () => {
      const token = process.env.TOKEN;
      const res = await request(app)
        .put("/product/65ea88ef1a1d91b496924260")
        .send({
            sampleName:"updatePass",
            sampleNumber:50505
        })
        .set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.sampleNumber).toBe(50505);
    });


    it("should update a non existing product", async () => {
      const token = process.env.TOKEN;
      const res = await request(app)
        .put("/product/65eeceef56f0753b4e3d941a").send({
          sampleName:"updatePass",
          sampleNumber:50505
      }).set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });


    it("Fail: invaild product Id", async () => {
      const token = process.env.TOKEN;
      const res = await request(app)
      .put("/product/65ea98fdb0cd528ef6e325")
      .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(400);
      });

  });
  
  
  
  describe("DELETE /product/:id", () => {

    it("should delete a product", async () => {
      const token = process.env.TOKEN;
      const res = await request(app).delete(
        `/product/${productId}`       
      ).set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });


    it("Fail: invaild product Id", async () => {
      const token = process.env.TOKEN;
      const res = await request(app).delete(
          "/product/65ea98fdb0cd528ef6e325"
        ).set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toBe(400);
      });
    

      it("Fail: does not exist product Id", async () => {
        const token = process.env.TOKEN;
        const res = await request(app).delete(
              '/product/65ea9b4cdb17974bdab912bc'
            ).set('Authorization', `Bearer ${token}`);
            expect(res.statusCode).toBe(404);
        });

  });
  
 