const express = require('express');
const app = express();
const port = 3000;


app.use(function(req, res, next){
  console.log('middleware chala');
  next();
})

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.get("/profile", function(req, res){
  res.send("dkfsdfdsdlfjksdfjkjdfksfjsdfljsd");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
