const express = require("express");
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

router.post("/login",homeControllers.login)

module.exports = router;