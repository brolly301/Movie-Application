const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  startTime: {
    type: String,
  },
  startDate: {
    type: String,
  },
  seatNumber: {
    type: [String],
  },
  email: {
    type: String,
  },
  movieID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  tickets: [
    {
      product: String,
      price: String,
      quantity: Number,
    },
  ],
  tickets: [
    {
      product: String,
      price: String,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("Booking", BookingSchema);
