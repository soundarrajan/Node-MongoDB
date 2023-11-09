const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number
});
//const FruitModel = mongoose.model('FruitCollection',fruitSchema);

const movieModel = mongoose.model('MovieCollection',movieSchema);

//module.exports = FruitModel;
module.exports = movieModel;