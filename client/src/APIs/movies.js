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
    },
  );
  return await response.json();
};

export const bookMovie = async ({
  startTime,
  startDate,
  seatNumber,
  email,
  movieID,
  tickets,
  extras,
} = {}) => {
  const booking = {
    startTime,
    startDate,
    email,
    seatNumber,
    movieID,
    tickets,
    extras,
  };

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movies/book`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    },
  );
  if (!response.ok) {
    throw new Error("Booking request failed.");
  }

  return response.json();
};

export const editMovie = async ({ title, showID, seatID } = {}) => {
  const updatedMovie = { title, showID, seatID };

  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/movies`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMovie),
  });
  if (!response.ok) {
    throw new Error("Seat reservation request failed.");
  }

  return response.text();
};
