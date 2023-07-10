const nodemailer = require("nodemailer");

exports.sendContactForm = (req, res) => {
  const { email, subject, message } = req.body;

  if (!email) {
    return res.status(401).json({
      error: "Please provide an email address.",
    });
  }

  if (!subject) {
    return res.status(401).json({
      error: "Please enter a subject.",
    });
  }
  if (!message) {
    return res.status(401).json({
      error: "Please enter a message.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marcrobertjohn@gmail.com",
      pass: "qklbtfcwnloxeckw",
    },
  });

  const options = {
    from: email,
    to: "marcrobertjohn@gmail.com",
    subject: subject,
    html: message,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    }
    res.send.JSON({
      message: "Message successfully sent.",
    });
  });
};
