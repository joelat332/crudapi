require('dotenv').config()
const express = require('express');
const {connectMongoDb}=require('./connection');
//const authToken=require('./middleware/authorization')
const authToken=require('auth-check-joel')

const productRouter = require('./routes/product');
const app=express();

const MONGO_URL=process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());



app.get('/',(req, res)=>{
    res.send('hello web')
})
app.get('/joel',(req, res)=>{
    res.send('hi this is joel ')
})

app.use(authToken)
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