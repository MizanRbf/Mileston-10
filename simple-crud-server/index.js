const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId }= require('mongodb');
const app = express()
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json())

// pass: kth6DfEhBryuag4r
// user: simple-DB-User
const uri = "mongodb+srv://simple-DB-User:kth6DfEhBryuag4r@cluster0.hoysa1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(){
try{
await client.connect();

// Insert to DB
// const userCollection=client.db('usersdb').collection('users');
const database = client.db('usersdb');
const userCollection = database.collection("users");

// Create Users
app.get('/users', async(req, res) => {
const cursor = userCollection.find();
const result = await cursor.toArray();
res.send(result);
})

// Read Users 
app.post("/users",async(req,res)=>{
  console.log('data in the server', req.body);
  const newUser = req.body;
  const result = await userCollection.insertOne(newUser);
  res.send(result);

})

// Delete Users

app.delete('/users/:id', async(req, res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await userCollection.deleteOne(query);
  res.send(result);
})




await client.db("admin").command({ping:1});
console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
// await client.close();
}
}
run().catch(console.dir);


// Server

app.get('/',(req,res)=>{
  res.send('Simple CRUD server running')
})

app.listen(port,()=>{
  console.log(`Simple CRUD server running on ${port}`)
})