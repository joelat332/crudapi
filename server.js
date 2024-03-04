const express = require('express')
const app=express()
app.get('/',(req, res)=>{
    res.send('hello web')
})

app.listen(3000,()=>{
    console.log("node is running")
})