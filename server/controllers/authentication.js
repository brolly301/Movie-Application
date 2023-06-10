const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  //Check if user exists
  const user = await User.findOne({ email: email });

  //Check if user details match those in the database
  if (!user.authenticate(password)) {
    return res.status(401).json({
      error: "Invalid email or password",
    });
  }

  //Adding a token to verify and identify the user that is logging in
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });

  res.cookie("jwt", token, { expire: new Date() + 1, httpOnly: true });

  res.status(200).json({
    message: "Login successful",
    email: user.email,
  });
};

exports.register = async (req, res) => {
  const newUser = new User(req.body);
  res.send(newUser);
  await newUser.save();
};

exports.logout = async (req, res) => {
  res.clearCookie("connect.sid");
  res.clearCookie("jwt");
  return res.status(200).json({
    message: "Successfully Logged Out",
  });
};

exports.getLoggedInUser = async (req, res) => {
  const { email } = req.user;

  return res.status(200).json({
    message: "User is still logged in",
    email,
  });
};
