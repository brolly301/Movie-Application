const nodemailer = require("nodemailer");

exports.sendContactForm = (req, res) => {
  const { email, subject, message } = req.body;

  res.status(200).json({
    message: "Success",
  });

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

exports.sendNewsletter = (req, res) => {
  const { email } = req.body;

  res.status(200).json({
    message: "Success",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marcrobertjohn@gmail.com",
      pass: "qklbtfcwnloxeckw",
    },
  });

  const options = {
    from: "marcrobertjohn@gmail.com",
    to: email,
    subject: "Newsletter Signup",
    html: "Thank you for signing up to our newsletter.",
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
