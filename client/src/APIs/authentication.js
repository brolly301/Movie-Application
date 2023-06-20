export const register = async ({
  email,
  firstName,
  surname,
  phoneNumber,
  password,
} = {}) => {
  const user = { email, firstName, surname, phoneNumber, password };
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

export const login = async ({ email, password } = {}) => {
  const user = { email, password };
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

export const logout = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const getUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
