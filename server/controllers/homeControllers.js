const employeeModel = require('../models/employeeModel')
const employerModel = require('../models/employerModel');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
    try {
        console.log(req.body);
        
        res.json({ status: true });
    } catch (error) {
        console.log(error);
    }
}
exports.login = login