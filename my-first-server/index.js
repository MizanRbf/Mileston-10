const express = require('express')
const cors = require('cors')
const app = express()
const phones = require('./Phones.json')
const port = 5000

app.use(cors());

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.get('/phones',(req,res)=>{
  res.send(phones)
})

app.get('/phone/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  console.log(id)
  const phone = phones.find(phone=>phone.id == id) || {};  //Ekhane OR operator ta parentheses er vetor deya hoyecilo
  res.send(phone)
})

app.get('/data',(req,res)=>{
  res.send('I am Mizanur Rahman')
})

app.listen(port, ()=>{
  console.log(`My first server is running on port ${port}`)
})