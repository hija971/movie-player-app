//GET
export const getUsersStart = () => ({
    type: "GET_USERS_START",
  });
  export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users,
  });
  export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE",
  });
  
  //CREATE
  export const createUsersStart = () => ({
    type: "CREATE_USER_START",
  });
  export const createUsersSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
  });
  export const createUsersFailure = () => ({
    type: "CREATE_USER_FAILURE",
  });
  
  //UPDATE
  export const updateUsersStart = () => ({
    type: "UPDATE_USER_START",
  });
  export const updateUsersSuccess = (user) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: user,
  });
  export const updateUsersFailure = () => ({
    type: "UPDATE_USER_FAILURE",
  });
  
  //DELETE
  export const deleteUserStart = () => ({
    type: "DELETE_USERS_START",
  });
  export const deleteUserSuccess = (id) => ({
    type: "DELETE_USERS_SUCCESS",
    payload: id,
  });
  export const deleteUserFailure = () => ({
    type: "DELETE_USERS_FAILURE",
  });
  