const User = require("../models/user");

exports.login = (req, res) => {};

exports.register = async (req, res) => {
  const newUser = new User(req.body);
  res.send(newUser);
  await newUser.save();
};
