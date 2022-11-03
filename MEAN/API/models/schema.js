const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const FruitModel = mongoose.model('FruitCollection',fruitSchema);

module.exports = FruitModel;