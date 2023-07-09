const nodemailer = require("nodemailer");

exports.sendContactForm = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marcrobertjohn@gmail.com",
      pass: "qklbtfcwnloxeckw",
    },
  });

  const options = {
    from: req.body.email,
    to: "marcrobertjohn@gmail.com",
    subject: req.body.subject,
    html: req.body.message,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    }
    res.send.JSON({
      message: "Successful",
    });
  });
};
