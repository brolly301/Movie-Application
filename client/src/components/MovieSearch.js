import { useState } from "react";

export default function MovieSearch() {
  const [movieData, setMovieData] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
    console.log(movieData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Choose Movie"
        />
        <input
          onChange={handleChange}
          name="date"
          type="text"
          placeholder="Choose Date"
        />
        <input
          onChange={handleChange}
          name="time"
          type="text"
          placeholder="Choose Time"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
