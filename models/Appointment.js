const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phone: String,
  slots: { type: mongoose.Schema.Types.ObjectId, ref: "timeSlot" },
  createdAt: Date
});

const Appointment = mongoose.model("admin", AppointmentSchema);

module.exports = Appointment;
