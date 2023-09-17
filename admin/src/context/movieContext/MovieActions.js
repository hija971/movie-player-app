//GET
export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});
export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});
export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

//CREATE
export const createMoviesStart = () => ({
  type: "CREATE_MOVIE_START",
});
export const createMoviesSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});
export const createMoviesFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

//UPDATE
export const updateMoviesStart = () => ({
  type: "UPDATE_MOVIE_START",
});
export const updateMoviesSuccess = (movie) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: movie,
});
export const updateMoviesFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

//DELETE
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIES_START",
});
export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  payload: id,
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
