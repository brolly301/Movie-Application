const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let accessToken = req.cookies.jwt;

  if (!accessToken) {
    return res.status(403).json({
      error: "unauthorized",
    });
  }

  //Verify if the jwt token is valid, then assigns its value to req._id so it can be used again
  let payload;
  try {
    payload = jwt.verify(accessToken, process.env.JWT_SECRET);
    req._id = payload._id;
    next();
  } catch (e) {
    return res.status(403).json({
      error: "unauthorized",
    });
  }
};
