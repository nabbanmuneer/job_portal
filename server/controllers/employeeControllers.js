const dotenv = require('dotenv');
dotenv.config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

const employeeRegister = async (req, res, next) => {
    try {
        let { userName, email, password, phoneNo } = (req.body);
        console.log("got", phoneNo);
        const verify = await client.verify.v2
            .services(TWILIO_SERVICE_SID)
            .verifications.create({ to: `+91${phoneNo}`, channel: 'sms' })
        console.log("OTP SENDED");
        res.json({ status: true });
    } catch (error) {
        console.log(error, "error in otp")
        res.json({ status: false })

    }
}
exports.employeeRegister = employeeRegister


const login = async (req, res) => {
    try {
        console.log(req.body);
        res.json({ status: true });
    } catch (error) {
        console.log(error);
    }
}
exports.login = login