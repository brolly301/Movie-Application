const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  product: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Basket", BasketSchema);
