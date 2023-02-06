const employeeModel = require('../models/employeeModel')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

const employeeRegister = async (req, res) => {
    try {
        let { email, phoneNo } = (req.body);
        const userVerify =await employeeModel.findOne({ email: email, phoneNo: phoneNo });
        if (!userVerify) {
            console.log("got", phoneNo);
            await client.verify.v2
                .services(TWILIO_SERVICE_SID)
                .verifications.create({ to: `+91${phoneNo}`, channel: 'sms' });
            console.log("OTP SENDED");
            res.json({ status: true });
        } else {
            console.log( "error in email or password");
            res.json({ status: false });
        }

    } catch (error) {
        console.log(error, "error in otp");
        res.json({ status: false });
    }
}
exports.employeeRegister = employeeRegister


const otpVerify = async (req, res) => {
    try {
        console.log("data", req.body);
        let { phoneNo, otp } = req.body
        mobile = Number(phoneNo);
        const verification_check = await client.verify.v2
            .services(TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: `+91${mobile}`, code: otp });
        if (verification_check.status == "approved" ) {
            const position = "employee";
            let { userName, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            const data = new employeeModel({ phoneNo: phoneNo, userName: userName, email: email, password: password, position: position });
            await data.save();
            return res.json({ status: true })
        }
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
}
exports.otpVerify = otpVerify


const employeeUpdate = async (req, res) => {
    try {
        let { userName, place, qualification, resume, profilePic,id } = req.body;
        const data = await employeeModel.findByIdAndUpdate(id, {
            $set: {
                userName: userName,
                place: place,
                qualification: qualification,
                resume: resume,
                profilePic: profilePic

            }
        },{new: true})
        console.log("controller data",data);
    } catch (error) {
        console.log(error);
    }
}
exports.employeeUpdate = employeeUpdate;


