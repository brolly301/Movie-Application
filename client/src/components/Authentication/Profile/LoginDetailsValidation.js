export default function Validation(values) {
  const errors = {};
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;

  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email format is not valid.";
  }

  if (values.password === "") {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Password format is not valid.";
  }

  return errors;
}
