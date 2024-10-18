const express= require("express")
const mongoose = require("mongoose")


const app=express()

mongoose.connect('mongodb://database:27017/test').then(()=> console.log('Mongodb connected')).catch(err=> console.error("mongodb error ",err))

app.get("/",(req,res)=>{
    res.send("Hello from server !!! ")
})

app.listen(3000,()=>{
    console.log("Server started !!!")
})