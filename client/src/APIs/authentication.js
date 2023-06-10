export const register = async ({ email, password } = {}) => {
  const user = { email, password };
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
