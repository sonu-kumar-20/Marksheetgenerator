const express = require("express");


const app = express();

app.get('/',(req,res)=>{
  res.send("Hi i m ready");
})

app.listen(3000);





