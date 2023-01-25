const employeeModel = require("../models/employeeModel");
const { smsOtp, otpValidiation } = require("../utils/otp");
// const employeeModel = require("../models/employeeModel");
const employerModel = require("../models/employerModel");
const otpModel = require("../models/otpModel");
const bcrypt = require("bcrypt");

const employerRegister = async (req, res) => {
    try {
        let { email } = req.body;
        console.log("enter otpregistration", email);
        let employerVerify = employerModel.findOne({ email: email });
        let employeeVerify = employeeModel.findOne({ email: email });
        if (employeeVerify && employerVerify) {
            console.log("email verified", email);
            const response = await smsOtp(email);
            console.log("status in email", response.status);
            if (response.status == true) {
                console.log("true in otp");
                res.json({ status: true })
            } else {
                console.log("false in otp");
                res.json({ status: false })
            }
        } else {
            console.log("false in otp");
            console.log("Error");
        }
    } catch (error) {
        console.log("false in otp", error);
        res.json({ status: false });
    }
};
exports.employerRegister = employerRegister;

const otpVerify = async (req, res) => {
    try {
        console.log(req.body);
        let { companyName, email, password, contactNo, otp } = req.body;
        let position = employer;
        const response = await otpValidiation(email, otp);
        console.log("otpValidation", response.status);
        if (response.status === true) {
            const data = new employerModel({ companyName: companyName, email: email, contactNo: contactNo, password: password, position: position });
            const salt = await bcrypt.genSalt(10);
            data.password = bcrypt.hash(data.password, salt);
            data.save();
            res.json({ status: true })
        } else {
            res.json({ status: false })
        }
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
}
exports.otpVerify = otpVerify