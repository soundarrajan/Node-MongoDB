const express = require('express');
const { connectToDB, getDB }  = require('./db.js');
const app = express();

// check db connection
let db;

connectToDB((err) => {
 if(!err){
    app.listen(3000,() => {
        console.log('i m listening');
    })
    db = getDB();
 }
})

app.get('/',(req,res) => {

    let books = [];

    db.collection('books')
    .find()
    .sort({genere:1})
    .forEach(element => {
        books.push(element)
    })
    .then(() =>{
        res.status(200).json(books);
    })
    .catch(() => {
        res.status(500).json({error:'error'})
    })

    res.send('its running');
})

