const express = require('express');
const app = express();
const port = 3000;
const json = {name:'test'}
app.get('/',(request,response) =>{
    //console.log('response');
    response.write("kkksk");
    response.write("kkkk");
    //response.json(json);
    response.send();
   
})
// app.get('/about',(request,response) =>{
//     //console.log(response)
//     response.send('hi this is ');
// })
// app.post('/', (req, res) => {
//     res.send('Got a POST request')
//   })
// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
//   })
const cb0 = function (req, res, next) {
    console.log('CB0');
    //res.send('Hello from C!')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C0!');
    //res.send('Hello from C0!');
  }

  
  app.get('/example/c', [cb0, cb1, cb2])
app.listen(port,() => {
  console.log("server sbtarted");
});