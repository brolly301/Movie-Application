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

export const getComingSoon = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movies/comingSoon`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export const getShows = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movies/shows`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};
