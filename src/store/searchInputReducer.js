const defaultState = {
  value: "",
  state: "",
};

const GET_SEARCH_VALUE = "GET_SEARCH_VALUE";
const GET_STATE_VALUE = "GET_STATE_VALUE";

export const searchInputReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEARCH_VALUE:
      return { ...state, value: action.payload };
    case GET_STATE_VALUE:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export const getSearchValueAction = (payload) => ({
  type: GET_SEARCH_VALUE,
  payload,
});

export const getStateValueAction = (payload) => ({
  type: GET_STATE_VALUE,
  payload,
});
