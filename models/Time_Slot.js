const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  slotTime: String,
  slotDate: String,
  createdAt: Date
});

const TimeSlot = mongoose.model("timeSlot", TimeSlotSchema);

module.exports = TimeSlot;
