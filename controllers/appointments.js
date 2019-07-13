const Appointment = require("../models/Appointment");
const TimeSlot = require("../models/Time_Slot");

const appointmentController = {
  all(req, res) {
    // returns every appointment
    Appointment.find({}).exec((err, appointments) =>
      res.json({ appointments })
    );
  },
  create(req, res) {
    let newTimeSlot = new TimeSlot({
      slotTime: req.body.slotTime,
      slotDate: req.body.slotDate,
      createdAt: Date.now()
    });
    newTimeSlot.save();

    let newAppointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      slots: newTimeSlot._id
    });

    newAppointment.save((err, saved) => {
      Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));
    });
  }
};
