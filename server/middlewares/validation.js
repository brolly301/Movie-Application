const errors = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};

exports.registerValidator = (req, res, next) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  const phoneRegex =
    /^(?:(?:\+|0{0,2})44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{2}|\d{4}\s?\d{6})$/;

  req.check("firstName", "First Name is required!").notEmpty();
  req.check("firstName", "First Name incorrect format").matches(nameRegex);

  req.check("surname", "Surname is required!").notEmpty();
  req.check("surname", "Surname incorrect format").matches(nameRegex);

  req.check("email", "Email is required!").notEmpty();
  req.check("email", "Email incorrect format").matches(emailRegex);

  req.check("phoneNumber", "Phone Number is required!").notEmpty();
  req.check("phoneNumber", "Phone Number incorrect format").matches(phoneRegex);

  req.check("password", "Password is required!").notEmpty();
  req.check("password", "Password incorrect format").matches(passwordRegex);

  req.check("confirmPassword", "Password confirmation is required!").notEmpty();
  req
    .check("confirmPassword", "Passwords do not match.")
    .matches(req.body.password);

  errors(req, res, next);
};

exports.editProfileValidator = (req, res, next) => {
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  const phoneRegex =
    /^(?:(?:\+|0{0,2})44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{2}|\d{4}\s?\d{6})$/;

  req.check("firstName", "First Name is required!").notEmpty();
  req.check("firstName", "First Name incorrect format").matches(nameRegex);

  req.check("surname", "Surname is required!").notEmpty();
  req.check("surname", "Surname incorrect format").matches(nameRegex);

  req.check("phoneNumber", "Phone Number is required!").notEmpty();
  req.check("phoneNumber", "Phone Number incorrect format").matches(phoneRegex);

  errors(req, res, next);
};

exports.contactUsValidator = (req, res, next) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const subjectRegex = /^.{1,30}$/;
  const messageRegex = /^.{1,800}$/;

  req.check("email", "Email is required!").notEmpty();
  req.check("email", "Email incorrect format").matches(emailRegex);

  req.check("subject", "Subject is required!").notEmpty();
  req.check("subject", "Subject incorrect format").matches(subjectRegex);

  req.check("message", "Message is required!").notEmpty();
  req.check("message", "Message incorrect format").matches(messageRegex);

  errors(req, res, next);
};

exports.newsletterValidator = (req, res, next) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  req.check("email", "Email is required!").notEmpty();
  req.check("email", "Email incorrect format").matches(emailRegex);

  errors(req, res, next);
};

exports.editLoginValidator = (req, res, next) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;

  req.check("email", "Email is required!").notEmpty();
  req.check("email", "Email incorrect format").matches(emailRegex);

  req.check("password", "Password is required!").notEmpty();
  req.check("password", "Password incorrect format").matches(passwordRegex);

  errors(req, res, next);
};
