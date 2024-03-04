const express = require('express');
const mongoose = require('mongoose');
const app=express()
const Product = require('./models/productModel');
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('hello web')
})
app.get('/joel',(req, res)=>{
    res.send('hi this is joel ')
})
app.get('/product',async(req,res)=>{
    try {
        const product =await Product.find({});
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})


app.post('/product',async(req,res)=>{
    try {
        const product =await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})



mongoose.
connect('mongodb://localhost:27017')
.then(()=>{
    console.log("connected to DB")
    app.listen(3000,()=>{
        console.log("node is running on 3000")
    })
    
}).catch((error)=>{
    console.log(error)
})