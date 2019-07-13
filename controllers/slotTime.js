const TimeSlot = require("../models/Time_Slot");

const slotController = {
  all(req, res) {
    slotController.find({}).exec((err, slots) => res.json(slots));
  }
};

module.exports = slotController;
