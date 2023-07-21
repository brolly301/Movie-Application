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

export const sendNewsletter = async (email) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/communication/newsletter`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  return await response.json();
};

export const sendNotification = async (email, movie) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/communication/comingSoonNotification`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, movie }),
    }
  );
  return await response.json();
};
