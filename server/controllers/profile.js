const User = require("../models/user");

module.exports.editProfileDetails = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { ...req.body });
    res.status(200).json({
      message: "Edit successful",
      user,
    });
  } catch (err) {
    res.send(err);
  }
};
