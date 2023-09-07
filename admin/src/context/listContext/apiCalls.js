import axios from "axios";
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListstart,
  deleteListsuccess,
  deleteListFailure
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    getListsFailure();
  }
};

//create
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMoviesStart());
//   try {
//   const res = await axios.post("/movies", movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createMoviesSuccess(res.data));
//   } catch (error) {
//     dispatch(createMoviesFailure());
//   }
// };


//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListstart());
  try {
    await axios.delete("/lists/"+id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListsuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
