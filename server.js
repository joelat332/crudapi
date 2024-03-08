const express = require('express');
require('dotenv').config()
const {connectMongoDb}=require('./connection');
const Product = require('./models/productModel');
const productRouter = require('./routes/product');

//middleware
const app=express();
app.use(express.json());


const MONGO_URL=process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('hello web')
})
app.get('/joel',(req, res)=>{
    res.send('hi this is joel ')
})

app.use('/product',productRouter);

//DB Connection
connectMongoDb(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port :${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})

module.exports=app;