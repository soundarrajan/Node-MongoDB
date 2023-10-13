//import express from "express";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public')) // to include common public files

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) =>{
    //res.send("Hi from server;;;");
    res.sendFile(__dirname+"/public/test.html")
})

app.post('/submit',(req,res) =>{
    console.log(req.body);
    res.send("ss");
})
    
app.listen(port,() =>{
    console.log(`first app running in ${port}`);
})