const express = require("express");
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');


router.post('/get',homeControllers.dataGet);

module.exports = router;