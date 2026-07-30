const User = require("../models/user");
const Booking = require("../models/booking");
const Movie = require("../models/movie");
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
    "movieID",
  );

  res.send(bookings);
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.body.bookingID,
    });

    if (!booking) {
      return res.status(404).json({
        error: "Booking not found.",
      });
    }

    await Movie.updateOne(
      {
        _id: booking.movieID,
      },
      {
        $set: {
          "shows.$[show].seats.$[seat].reserved": false,
        },
      },
      {
        arrayFilters: [
          {
            "show.date": booking.startDate,
            "show.startTime": booking.startTime,
          },
          {
            "seat.seatNumber": {
              $in: booking.seatNumber,
            },
          },
        ],
      },
    );

    await Booking.deleteOne({
      _id: booking._id,
    });

    return res.status(200).json({
      message: "Booking cancelled.",
      bookingID: booking._id,
    });
  } catch (error) {
    console.error("Booking cancellation failed:", error.message);

    return res.status(500).json({
      error: "Booking could not be cancelled.",
    });
  }
};
