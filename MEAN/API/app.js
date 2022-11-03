const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
//db connection
const mongoose = require('./database/mongoose');

//Schema models
const dataSchema = require('./models/schema');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
//res.send("app works");
dataSchema.find()
.then(data=>res.send(data))
.catch((err)=>{console.log("error")})
});

app.listen(port,(req,res)=>{
    console.log("its running");
})