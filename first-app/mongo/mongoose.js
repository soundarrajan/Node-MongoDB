const mongoose = require('mongoose');
//import { MongoClient } from 'mongodb'

mongoose.connect('mongodb://localhost:27017/FruitsDB');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const FruitModel = mongoose.model('FruitCollection',fruitSchema);

const fruitDoc = new FruitModel({
    name:'apple',
    rating:7
});

const orange = new FruitModel({
    name:'orange',
    rating:7
});
const banana = new FruitModel({
    name:'banana',
    rating:7
});

//fruitDoc.save().then(()=>console.log("done"));

//FruitModel.insertMany([orange,banana], function(error, docs) {});

FruitModel.find(function(err,result){
console.log(result);
console.log("dsdsds");
});