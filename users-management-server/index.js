const express = require("express")
const cors = require("cors")
const app =express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World')
})

const users = [
  {"id":1,"name":"Mizanur Rahman","email":"mizan@example.com"},
  {"id":2,"name":"Rahim Uddin","email":"rahim@example.com"},
  {"id":3,"name":"Karim Hossain","email":"karim@example.com"},
  {"id":4,"name":"Sumi Akter","email":"sumi@example.com"},
  {"id":5,"name":"Nadia Hasan","email":"nadia@example.com"}
]

app.get('/users',(req, res)=>{
  res.send(users)
})

app.post('/users',(req,res)=>{
  // console.log(req.body)
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, ()=>{
  console.log(`${port}`)
})