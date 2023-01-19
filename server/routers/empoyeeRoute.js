const express = require("express");
const router = express.Router();

const employeeControllers = require('../controllers/employeeControllers');

router.post('/register', employeeControllers.employeeRegister)

router.post("/login",employeeControllers.login)
module.exports = router;