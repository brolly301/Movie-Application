export const sendContactForm = async ({ email, subject, message } = {}) => {
  const form = { email, subject, message };

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/communication/contactUs`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );
  return await response.json();
};
