const express=require("express");
const mongoose=require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require("./config/corsOption");

const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));


const employeeRoute = require('./routers/employeeRoute');
const employerRoute=require('./routers/employerRoute')

app.use("/employee",employeeRoute);
app.use("/employer",employerRoute)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTDB).then(()=>{
    mongoose.set('strictQuery', false);
    app.listen(process.env.PORT,()=>{
        
        console.log("listing port 3000")
    });
});
