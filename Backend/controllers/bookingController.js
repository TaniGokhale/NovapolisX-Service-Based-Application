const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      userId: req.user,
      eventId: req.body.eventId,
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user }).populate("eventId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};