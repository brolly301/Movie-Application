const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeatingSchema = new Schema([
  {
    seatNumber: String,
    reserved: {
      type: Boolean,
      default: false,
    },
  },
]);

module.exports = mongoose.model("Seating", SeatingSchema);
