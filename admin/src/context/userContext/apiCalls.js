import axios from "axios";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  createUsersFailure,
  createUsersStart,
  createUsersSuccess,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};

//create
export const createUser = async (user, dispatch) => {
  dispatch(createUsersStart());
  try {
    const res = await axios.post("/users", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUsersSuccess(res.data));
    console.log("Created!");
  } catch (error) {
    dispatch(createUsersFailure());
  }
};

//update
export const updateUser = async (id, updatedUser, dispatch) => {
  dispatch(updateUsersStart());
  try {
    const res = await axios.put("/users/" + id, updatedUser, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateUsersSuccess(res.data));
    console.log("Updated");
  } catch (error) {
    dispatch(updateUsersFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};
