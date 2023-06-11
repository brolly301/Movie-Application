const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  date: {
    type: String,
  },
  startTime: {
    type: String,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
  },
});

module.exports = mongoose.model("Show", ShowSchema);
