const User = require("../models/user");
const Booking = require("../models/booking");

exports.editProfileDetails = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
    res.status(200).json({
      message: "Edit successful",
      user,
    });
  } catch (err) {
    res.send(err);
  }
};

exports.getBookingDetails = async (req, res) => {
  const bookings = await Booking.find({ email: req.user.email });
  res.send(bookings);
};
