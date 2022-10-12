const express = require('express');
const app = express();
const port = 3000;
app.get('/',(request,response) =>{
    //console.log(response)
    response.send('hi');
})
app.get('/about',(request,response) =>{
    //console.log(response)
    response.send('hi this is ');
})
app.listen(port,() => {
  console.log("server started");
});