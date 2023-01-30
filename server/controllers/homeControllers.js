const employeeModel = require('../models/employeeModel')
const employerModel = require('../models/employerModel');
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();

const dataGet = async(req,res)=>{
    // console.log("log" ,req.header);
}
exports.dataGet=dataGet;