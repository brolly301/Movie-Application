export const getMovies = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
