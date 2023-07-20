export const editUserDetails = async ({
  firstName,
  surname,
  phoneNumber,
  loyaltyPoints,
} = {}) => {
  const updatedUser = { firstName, surname, phoneNumber, loyaltyPoints };

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/profile/editUserDetails`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    }
  );
  return await response.json();
};

export const editLoginDetails = async () => {
  // const updatedUser = { email };

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/profile/editLoginDetails`,
    {
      method: "PATCH",
      // credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "hey" }),
    }
  );
  return await response.json();
};

export const getBookings = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/profile/bookingDetails`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export const deleteBooking = async (bookingID) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/profile/booking`,
    {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingID }),
    }
  );
  return await response.json();
};
