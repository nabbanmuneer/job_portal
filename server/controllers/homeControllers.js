const employeeModel = require('../models/employeeModel')
const employerModel = require('../models/employerModel');
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
        console.log("home role",userData.role);
        if (userData.role == 'employee') {
            let data = await employeeModel.findOne({ email: userData.email });
           console.log("data sending in home",data);
            res.json({ data});
        } else if (userData.role === "employer") {
            let data = await employerModel.findOne({ email: userData.email });
            console.log(data);
            res.json({ data});
        }
    }catch (error) {
         console.log(error);
        res.json({ status: "404" })
    }
}
exports.dataGet = dataGet;