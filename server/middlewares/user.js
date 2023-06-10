const User = require("../models/user");

exports.userByID = async (req, res, next) => {
  const user = await User.findById(req._id);
  if (!user) {
    res.status(400).json({
      error: "User not found",
    });
  }

  //stores all the user information in the req.user object
  //Verify and userByID are both done in passport automatically, so its different when doing from scratch, more to do
  req.user = user;

  next();
};
