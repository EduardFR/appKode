const defaultState = {
  users: [],
};

const UPDATE_USERS = "UPDATE_USERS";

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { users: [...action.payload] };

    default:
      return state;
  }
};

export const downloadUsersAction = (payload) => ({
  type: UPDATE_USERS,
  payload,
});
