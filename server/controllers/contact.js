const nodemailer = require("nodemailer");

exports.sendContactForm = (req, res) => {
  const { email, subject, message } = req.body;

  res.status(200).json({
    message: "Success",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const options = {
    from: email,
    to: process.env.EMAIL_USER,
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Newsletter Signup",
    html: "Thank you for signing up to our newsletter.",
  };

   try {
    await transporter.sendMail(options);

    return res.status(200).json({
      message: "Newsletter signup successful.",
    });
  } catch (error) {
    console.error("Newsletter email failed:", error.message);

    return res.status(500).json({
      error: "Newsletter signup failed.",
    });
  }
};

exports.sendNotification = (req, res) => {
  const { email, movie } = req.body;

  res.status(200).json({
    message: "Success",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `${movie.title} Notification`,
    html: `Thank you for signing up for notifications for ${movie.title}, you will be contacted shortly before this movie is released.`,
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
