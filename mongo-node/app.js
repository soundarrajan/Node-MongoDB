const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDB, getDB }  = require('./db.js');
const app = express();

// check db connection
app.use(express.json())
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

app.get('/bookd/:id',(req,res) => {

   if(ObjectId.isValid(req.params.id)){
    db.collection('books')
    .findOne({_id:ObjectId(req.params.id)})
    .then((doc) =>{
        res.status(200).json(doc);
    })
    .catch(() => {
        res.status(500).json({error:'error'})
    })

    res.send('its running');
} else{
    res.status(500).json({error:'error'})
}
})

app.post('/books',(req,res) => {
const book= req.body;
    db.collection('books')
    .insertOne(book)
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch(() => {
        res.status(500).json({error:'error'})
    })

    res.send('its running');
})

app.delete('/bookd/:id',(req,res) => {

    if(ObjectId.isValid(req.params.id)){
     db.collection('books')
     .deleteOne({_id:ObjectId(req.params.id)})
     .then((doc) =>{
         res.status(200).json(doc);
     })
     .catch(() => {
         res.status(500).json({error:'error'})
     })
 
     res.send('its running');
 } else{
     res.status(500).json({error:'error'})
 }
 })

 app.patch('/books/:id',(req,res) => {
    const update= req.body;
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .updateOne({_id:ObjectId(req.params.id)},{$set:{update}})
        .then((doc) =>{
            res.status(200).json(doc);
        })
        .catch(() => {
            res.status(500).json({error:'error'})
        })
    
        res.send('its running');
    } else{
        res.status(500).json({error:'error'})
    }
 })
