export const editUserDetails = async ({
  firstName,
  surname,
  phoneNumber,
} = {}) => {
  const updatedUser = { firstName, surname, phoneNumber };

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
