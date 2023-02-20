const express = require("express");
const router = express.Router();

const employeeControllers = require('../controllers/employeeControllers');

router.post('/register', employeeControllers.employeeRegister);
router.post('/otpverify', employeeControllers.otpVerify);
router.post('/update', employeeControllers.employeeUpdate);
router.post('/bidPost',employeeControllers.bidPost)
router.post('/profile',employeeControllers.employeeProfile)


module.exports = router;