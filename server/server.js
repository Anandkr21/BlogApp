const express = require('express');
const app = express()
require('dotenv').config()
const Port = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('hello')
})

app.listen(Port, () =>{
    console.log("running");
})