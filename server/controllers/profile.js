const User = require("../models/user");
const Booking = require("../models/booking");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

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

exports.editLoginDetails = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!password || password === "") {
      const user = await User.findByIdAndUpdate(req.user._id, {
        email: email,
      });
      res.status(200).json({
        message: "Edit successful",
        user,
      });
    } else {
      const salt = uuidv1();
      const updatedPassword = crypto
        .createHmac("sha256", salt)
        .update(password)
        .digest("hex");

      const user = await User.findByIdAndUpdate(req.user._id, {
        email: email,
        salt: salt,
        hashedPassword: updatedPassword,
      });

      res.status(200).json({
        message: "Edit successful",
        user,
      });
    }
  } catch (err) {
    res.send(err);
  }
};

exports.getBookingDetails = async (req, res) => {
  const bookings = await Booking.find({ email: req.user.email }).populate(
    "movieID"
  );
  res.send(bookings);
};

exports.deleteBooking = async (req, res) => {
  const bookings = await Booking.findOneAndDelete({
    _id: req.body.bookingID,
  });
  res.send(bookings);
};
