import axios from "axios";
import {
  getListsStart,
  getListsSuccess,
  getListsFailure,
  deleteListstart,
  deleteListsuccess,
  deleteListFailure,
  createListsStart,
  createListsSuccess,
  createListsFailure
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
export const createList = async (list, dispatch) => {
  dispatch(createListsStart());
  try {
  const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListsSuccess(res.data));
  } catch (error) {
    dispatch(createListsFailure());
  }
};


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
