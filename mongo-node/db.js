// install mongodb

const { MongoClient } = require('mongodb');

let dbConnection;
module.exports = {
    connectToDB:(cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
        .then((client) => {
            dbConnection = client.db();
            return cb() // callback func called after the db connection
        })
        .catch(err =>  {
            console.log(err);
            return cb(err);
        })
    },

    getDB: () =>{
        dbConnection
    }
}