// if(1==1){
// const response = await fetch("https://jsonplaceholder.typicode.com/users");

// const data = await response.json();
// }
// console.log(data);

const express = require('express');
const https  = require('https');
const app = express();
const url = 'https://jsonplaceholder.typicode.com/users';
app.get('/',(req,res)=>{
 //res.send("server running");
//  https.get(url,(response)=>{
//    //console.log(response1);
//    console.log('statusCode:', response.statusCode);
//   //console.log('headers:', res.headers);
//  })

https.get('https://jsonplaceholder.typicode.com/users', (response) => {
//   console.log('statusCode:', res.statusCode);
 //  console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     //process.stdout.write(d);
//    const datas = JSON.parse(d);
//    console.log(datas);
//   });
var newsItems = '';
response.on("data", function (data) {
    newsItems += data;
});

response.on("end", function () {
    var jsonParse = JSON.parse(newsItems);
    console.log(jsonParse);
    // res.write("test");
    //res.write("test");
    res.send(jsonParse);
    //res.send();
});

}).on('error', (e) => {
  console.error(e);
});
 
 
 console.log("started");
 //res.send("responsed");
 //res.send(jsonParse);
 //res.send("response");
})

app.listen(3000);