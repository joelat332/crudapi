const express = require('express');
require('dotenv').config()
const {connectMongoDb}=require('./connection');
const productRouter = require('./routes/product');
const jwt= require('jsonwebtoken')

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

app.use(authToken)
app.use('/product',productRouter);


function authToken(req,res,next){
    const authHeader =req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) return res.sendStatus(401).send

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) return res.sendStatus(401)
        next()
    })
}


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