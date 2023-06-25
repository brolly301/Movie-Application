const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  date: {
    type: Date,
  },
  startTime: {
    type: String,
  },
  title: {
    type: String,
  },
});

module.exports = mongoose.model("Show", ShowSchema);
