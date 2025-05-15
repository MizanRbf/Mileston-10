const express = require("express");
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hoysa1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Mongo Client
const client = new MongoClient(uri, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
try {
await client.connect();
await client.db('admin').command({ping:1});
console.log('Pinged your deployment')
}finally{

}
}
run().catch(console.dir);



app.get('/', (req, res)=>{
  res.send('Coffee server is getting hotter.')
})

app.listen(port, ()=>{
  console.log(`Coffee server running on port ${port}`)
})


