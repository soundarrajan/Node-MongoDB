// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
// res.send("app works");
// });

// app.listen(port,(req,res)=>{
//     console.log("its running");
// })

// connection using NATIVE MONGODB DRIVER:

const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017";
  //"mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

