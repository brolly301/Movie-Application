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
