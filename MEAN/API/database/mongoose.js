const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB')
.then((x) => {
    console.log(`Connected to Mongo! Database name:`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

  module.exports = mongoose;