const express = require("express");
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');


router.post('/get',homeControllers.dataGet);

router.post('/homeGet',homeControllers.homeData)

module.exports = router;