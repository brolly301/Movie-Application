const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
});

UserSchema.virtual("password").set(function (password) {
  this._password = password;
  this.salt = uuidv1();
  this.hashedPassword = this.encryptPassword(password);
});

UserSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  authenticate: function (unhashedPassword) {
    return this.encryptPassword(unhashedPassword) === this.hashedPassword;
  },
};

module.exports = mongoose.model("User", UserSchema);
