import axios from "axios";

const getMovies = async (title) => {
  const response = await axios.get("https://www.omdbapi.com/?apikey=f7d31db2", {
    params: {
      s: title,
      // type: "movie",
    },
  });
  // console.log(response.data.Search);
  return response.data.Search;
};

export default getMovies;
