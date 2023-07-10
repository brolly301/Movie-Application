export default function Validation(values) {
  const errors = {};
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  const phoneRegex =
    /^(?:(?:\+|0{0,2})44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{2}|\d{4}\s?\d{6})$/;

  if (values.firstName === "") {
    errors.firstName = "First name is required.";
  } else if (!nameRegex.test(values.firstName)) {
    errors.firstName =
      "First name must not contain numbers or exceed 30 characters.";
  }

  if (values.surname === "") {
    errors.surname = "Surname is required.";
  } else if (!nameRegex.test(values.surname)) {
    errors.surname =
      "Surname must not contain numbers or exceed 30 characters.";
  }

  if (values.phoneNumber === "") {
    errors.phoneNumber = "Phone Number is required.";
  } else if (!phoneRegex.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone Number format is incorrect.";
  }

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

  if (values.confirmPassword === "") {
    errors.confirmPassword = "Password confirmation is required.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
