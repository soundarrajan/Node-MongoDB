// const http = require('http');
// const server = http.createServer((req,res) =>{
// console.log('method',req.method);
// console.log('url',req.url);
// res.end('sss');
// })
// server.listen(3000);

//express middleware function:

const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
console.log("ooo");
next();
})
app.get('/',(request,response) =>{
    //console.log('response');
    response.send('hi0i0o');
})

/// postman 
app.post('/',(request,response) =>{
    //console.log('response');
    response.send('the post request to postman');
})

app.listen(3000);