const employeeModel = require('../models/employeeModel')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

const employeeRegister = async (req, res, next) => {
    try {
        let { email, phoneNo } = (req.body);
        const userVerify = employeeModel.findOne({ email: email, phoneNo: phoneNo });
        if (userVerify) {
            console.log("got", phoneNo);
            const verify = await client.verify.v2
                .services(TWILIO_SERVICE_SID)
                .verifications.create({ to: `+91${phoneNo}`, channel: 'sms' });
            console.log("OTP SENDED");
            res.json({ status: true });
        } else {
            console.log(error, "error in email or password");
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
        console.log("verifcation ckeck otp  ", verification_check.status);
        console.log("checking areaw", verification_check);
        if (verification_check.status == "approved") {
            let position = "employee";
            let { userName, email, password } = req.body;
            const data = new employeeModel({ phoneNo: phoneNo, userName: userName, email: email, password: password, position: position });
            const salt = await bcrypt.genSalt(10);
            data.password = await bcrypt.hash(data.password, salt);
            data.save();
            console.log("otp verified");
            res.json({ status: true })
        }
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
}
exports.otpVerify = otpVerify



