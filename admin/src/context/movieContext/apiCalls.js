import axios from "axios";
import {
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  createMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  updateMoviesStart,
  updateMoviesSuccess,
  updateMoviesFailure,
} from "./MovieActions";

//get
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMoviesSuccess(res.data));
    console.log("Created!");
  } catch (error) {
    dispatch(createMoviesFailure());
  }
};

//update
export const updateMovie = async (id, updatedMovie, dispatch) => {
  dispatch(updateMoviesStart());
  try {
    const res = await axios.put("/movies/" + id, updatedMovie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateMoviesSuccess(res.data));
    console.log("Updated");
  } catch (error) {
    dispatch(updateMoviesFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
