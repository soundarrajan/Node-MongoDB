const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt-nodejs");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));  // for postman
app.use(bodyParser.json())

const database = {
    users:[
        {
            id:'1',
            name:'abc',
            email:'abc@gmail.com',
            password:'abcd',
            entries:'0'
        },
        {
            id:'2',
            name:'bbc',
            email:'bbc@gmail.com',
            password:'bbcd',
            entries:'0'
        }
    ]

};
app.get('/',(req,res)=>{
res.send(database.users);
});

app.post('/signin',(request,response)=>{
    console.log(request.body);
    //response.send("signed in");
    if(request.body.email === database.users[0].email && request.body.password === database.users[0].password){
        response.send("success");
    }else{
        response.send('try again');
    }
});

app.post('/register',(request,response)=>{
    //console.log(request.body);
    const {name,email,password} = request.body;
    bcrypt.hash(password,null,null,(err,hash)=>{
        console.log(hash);
    })
    
    
    database.users.push(
        {
            id:'3',
            name:name,
            email:email,
            password:password,
            entries:'0'
        }
    );
    response.send(database.users);
});

app.post('/profile/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    //res.json(database.users);
    //res.send(req.params);
    database.users.forEach(user =>{
        if(user.id === id){
            return res.send(user.name);
        }
    })
})

app.post('/image',(req,res)=>{
    const {id} = req.body;
    database.users.forEach(user=>{
        if(user.id===id){
return user.entries++;
        }
    })
    res.send(id);
})

app.listen(port,(req,res)=>{
  console.log("hi");
});

/**
 * /signin - POST - success/fail
 * /register - POST - register user
 * /profile/:userid - GET - get user
 * /image - PUT - update the number of images by user
 */