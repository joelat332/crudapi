const mongoose = require("mongoose");
const request = require("supertest");
const app =require("../server")

require("dotenv").config();


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
      const res = await request(app).get("/product");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });

    // it("error not return all products", async () => {
    //     const res = (await request(app).get("/product").toThrow(Error))
    //     expect(res.statusCode).toBe(400);
    // });   
  });

  
  describe("GET /product/:id", () => {
    it("should return a product", async () => {
      const res = await request(app).get(
        "/product/65ea88ef1a1d91b496924260"//dont change
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.sampleName).toBe("updatePass");
    });
    it("Fail: invaild product Id", async () => {
        const res = await request(app).get(
          "/product/65ea98fdb0cd528ef6e325"
        );
        expect(res.statusCode).toBe(400);
      });
   });
  
  describe("POST /product", () => {
    it("should create a product", async () => {
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
                });
      expect(res.statusCode).toBe(200);
    });
  });
  
  describe("PUT /products/:id", () => {
    it("should update a product", async () => {
      const res = await request(app)
        .put("/product/65ea88ef1a1d91b496924260")
        .send({
            sampleName:"updatePass",
            sampleNumber:50505
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.sampleNumber).toBe(50505);
    });

    it("Fail: invaild product Id", async () => {
        const res = await request(app).put(
          "/product/65ea98fdb0cd528ef6e325"
        );
        expect(res.statusCode).toBe(400);
      });
    
    it("Fail: cant find  product Id", async () => {
        const res = await request(app).put(
          "/product/65ea9b4cdb17974bdab912bc"
        );
        expect(res.statusCode).toBe(404);
    });
    
  });
  
  describe("DELETE /product/:id", () => {
    it("should delete a product", async () => {
      const res = await request(app).delete(
        "/product/65eab2e37e4b610fd9b960de"         // change
      );
      expect(res.statusCode).toBe(200);
    });
    it("Fail: invaild product Id", async () => {
        const res = await request(app).delete(
          "/product/65ea98fdb0cd528ef6e325"
        );
        expect(res.statusCode).toBe(400);
      });
    
      it("Fail: does not exist product Id", async () => {
            const res = await request(app).delete(
              "/product/65ea9b4cdb17974bdab912bc"
            );
            expect(res.statusCode).toBe(404);
        });
  });
  
 