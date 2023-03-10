const employeeModel = require('../models/employeeModel')
const employerModel = require('../models/employerModel');
const jobModel = require("../models/jobModel")
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
const jwt_decode = require("jwt-decode");
dotenv.config();

const dataGet = async (req, res) => {
    try {
        const token = req.headers.token
        const decoded = jwt_decode(token);
        // let data = ' '
        console.log(decoded.UserInfo);
        let userData = decoded.UserInfo;
        console.log("home role", userData.role);
        if (userData.role == 'employee') {
            let data = await employeeModel.findOne({ email: userData.email });
            console.log("data sending in home", data);
            res.json({ data });
        } else if (userData.role === "employer") {
            let data = await employerModel.findOne({ email: userData.email });
            console.log(data);
            res.json({ data });
        }
    } catch (error) {
        console.log(error);
        res.json({ status: "404" })
    }
}
exports.dataGet = dataGet;

const homeData = async (req, res) => {
    try{
        const data1 = await jobModel.aggregate([{
            $match:{
                jobType :"fullTime"
            }
        },{
            $group:{
                _id:"$Category",    
            }
        }])
        const data2 = await jobModel.aggregate([{
            $match:{
                jobType :"partTime"
            }
        },{
            $group:{
                _id:"$Category",    
            }
        }])
        console.log(data1,data2);
        res.json({ data1,data2 });
    }catch(error){
        res.json({status:false})
    }
    
}
exports.homeData = homeData