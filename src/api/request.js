const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "f1c776c3601bf29e512e826ffb7a24e0";

export const getMoviesList = id => {
  const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${id}`;
  return url;
};

export const getMovie = id => {
  const url = `${baseUrl}movie/${id}?api_key=${apiKey}&append_to_response=videos`;
  return url;
};

export const getSearchMovies = query => {
  const url = `${baseUrl}search/movie/?api_key=${apiKey}&query=${query}&page=1&include_adult=false`;
  return url;
};
