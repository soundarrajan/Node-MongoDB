const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
res.send("app works");
});

app.listen(port,(req,res)=>{
    console.log("its running");
})