const express = require("express");
const router = express.Router();

const employerControllers = require('../controllers/employerControllers');

router.post('/register', employerControllers.employerRegister)

router.post('/otpverify',employerControllers.otpVerify)

router.post('/update',employerControllers.update)

module.exports = router;