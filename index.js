const express = require("express")
const mongoose = require("mongoose")



const app = express();

app.get("/",(req,res)=>{
    res.send("response comes")
})

mongoose.connect("mongodb://localhost:27017/happy",{
    useNewUrlParser:true,useUnifiedTopology:true
})

app.listen(3000,()=>{
    console.log("server is running")
    console.log("on port 3000 it is connected")
})

