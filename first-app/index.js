const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({extended:true})); // for html form
app.use(bodyParser.urlencoded({extended:true}));  // for postman
app.use(bodyParser.json())
app.get('/',(req,res) =>{
  //res.send('hiiii');
  //console.log(__dirname);
  res.sendFile(__dirname+"/htmlfile.html")
});

app.post('/',(req,res) => {
 //res.send("success");
 //console.log(req.body);
 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);
 var result = num1 + num2;
 res.send(""+result);
})

app.post('/frompostman',(req,res)=>{
console.log(req.body);
res.send('the post request to postman');
})

app.listen(port,() => {
console.log('server running');
})