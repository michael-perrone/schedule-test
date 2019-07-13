const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointments");
const slotController = require("../controllers/slotTime");

router.post("/", appointmentController.create);

module.exports = router;
