const express = require("express");

const appointmentController = require("../controllers/appointments");
const slotController = require("../controllers/slotTime");

router.get("/appointments", appointmentController.all);
router.get("/retrieveSlots", slotController.all);
router.post("/appointmentCreate", appointmentController.create);

module.exports = router;
