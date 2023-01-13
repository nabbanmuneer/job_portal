const express=require("express");
const mongoose=require("mongoose")
const app=express();





mongoose.connect("mongodb://127.0.0.1:27017/jobportal").then(()=>{
    app.listen(3000,()=>{
        console.log("listing port 3000")
    });
});
