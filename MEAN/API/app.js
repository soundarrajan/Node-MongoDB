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

app.post('/book',(req,res) => {
// save a document in collection
    // const book = new dataSchema(req.body);
    // book.save().then((book) => {
    //     res.status(201).send(book)
    //     .catch((error) => {
    //         res.status(400).send(error);
    //     })
    // })
// another method to save doc
// dataSchema.create(req.body)
// .then((book) => {
//     res.status(201).send(book)
// })
// .catch((error) => {
//     res.status(400).send(error.message);
// })

// insert many method to save doc
dataSchema.insertMany(req.body)
.then((book) => {
    res.status(201).send(book)
})
.catch((error) => {
    res.status(400).send(error.message);
})

})

app.listen(port,(req,res)=>{
    console.log("its running");
})