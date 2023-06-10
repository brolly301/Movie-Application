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

//Creating a virtual field that is not stored in mongoDB and assigns this to the hashedPassword field in the database, so that the real password is not stored
//The salt is also generated using the uuidv1 package
UserSchema.virtual("password").set(function (password) {
  this._password = password;
  this.salt = uuidv1();
  this.hashedPassword = this.encryptPassword(password);
});

//The encrypt password method is used in the virtual above to firstly create the Hmac using the sha256 hasing method, then updates the password variable with this
//hashed code. The digest method is used to generate this hash value after its been applied through the update method
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
  //Checks if the unhashed password is equal to the hashed password by comparing it using the above method
  authenticate: function (unhashedPassword) {
    return this.encryptPassword(unhashedPassword) === this.hashedPassword;
  },
};

module.exports = mongoose.model("User", UserSchema);
