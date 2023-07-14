export default function Validation(values) {
  const errors = {};
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

  return errors;
}
