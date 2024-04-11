const key = "3e93b29c9ce85c0fe3c41f70d89fe70a";
let searchvalue = ""; // Initialize search value

const setSearchValue = (value) => {
  searchvalue = value; // Update search value
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkzYjI5YzljZTg1YzBmZTNjNDFmNzBkODlmZTcwYSIsInN1YiI6IjY2MTZhZjNkY2I2ZGI1MDE3Y2E5ZTZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUeC5YEe4x1_qFgjObYSabkKDBPdmQHORkpEW4uonPM",
  },
};

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=Action&page=1`,
  requestPopularTvlist: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  requestTopratedTvlist: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
  requestSearchmovie: `https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=1`,
};

export { requests, options, setSearchValue }; // Export setSearchValue function
