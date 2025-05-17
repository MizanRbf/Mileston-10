const express = require("express");
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
const database = client.db('coffeesdb');
const coffeesCollection = database.collection('coffees');
const usersCollection = database.collection('users');

// Coffee Related APIs 

// Create 
app.post('/coffees', async(req, res)=>{
  const newCoffee = req.body;
  console.log(newCoffee);
  const result = await coffeesCollection.insertOne(newCoffee);
  res.send(result);
})

// Read
app.get('/coffees', async(req, res)=>{
  const cursor = coffeesCollection.find();
  const result = await cursor.toArray();
  res.send(result);
})

// Read Single
app.get('/coffees/:id', async(req, res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await coffeesCollection.findOne(query);
  res.send(result);
})


// Update
app.put('/coffees/:id', async(req, res)=>{
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const updatedCoffee = req.body;
  const updatedDoc = {
    $set:updatedCoffee
  }
  const result = await coffeesCollection.updateOne(filter, updatedDoc);
  res.send(result);
})


// Delete
app.delete('/coffees/:id', async(req, res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await coffeesCollection.deleteOne(query);
  res.send(result);
})


// User Related APIs

// Read
app.get('/users', async(req, res)=>{
  // const cursor = usersCollection.find()
  // const result = await toArray(cursor);
  const result = await usersCollection.find().toArray();
  res.send(result);
})

// Create
 app.post('/users', async(req, res)=>{
  const userProfile = req.body;
  const result = await usersCollection.insertOne(userProfile);
  res.send(result);
 })

//  Update
app.patch('/users',async(req, res)=>{
  const {email,lastSignInTime} = req.body;
  const filter = {email: email};
  const updatedDoc = {
    $set:{
      lastSignInTime: lastSignInTime
    }
  }
  const result = await usersCollection.updateOne(filter,updatedDoc);
  res.send(result);

})

// Delete
app.delete('/users/:id', async(req, res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await usersCollection.deleteOne(query);
  res.send(result);
})


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


