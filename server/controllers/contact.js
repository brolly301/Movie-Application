const nodemailer = require("nodemailer");

exports.sendContactForm = async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({
      error: "Email, subject and message are required.",
    });
  }

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

  try {
    await transporter.sendMail(options);

    return res.status(200).json({
      message: "Message successfully sent.",
    });
  } catch (error) {
    console.error("Contact email failed:", error.message);

    return res.status(500).json({
      error: "Your message could not be sent.",
    });
  }
};

exports.sendNewsletter = async (req, res) => {
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
