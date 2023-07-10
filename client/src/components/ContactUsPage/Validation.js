export default function Validation(values) {
  const errors = {};
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email format is not valid.";
  }

  if (values.subject === "") {
    errors.subject = "Subject is required.";
  }

  if (values.message === "") {
    errors.message = "Message is required.";
  }

  return errors;
}
