const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  //Check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      error: "User not found",
    });
  }
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
    message: "Login successful. Welcome " + user.firstName,
    email: user.email,
  });
};

exports.register = async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(403).json({
      error: "Email already taken.",
    });
  }

  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({
    message: "Sign up successful. Welcome" + req.body.firstName,
  });
};

exports.logout = async (req, res) => {
  res.clearCookie("connect.sid");
  res.clearCookie("jwt");
  return res.status(200).json({
    message: "Successfully Logged Out",
  });
};

exports.getLoggedInUser = async (req, res) => {
  return res.status(200).json({
    message: "User is still logged in",
    ...req.user._doc,
  });
};
