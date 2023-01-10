const defaultState = {
  value: "",
};

const GET_SEARCH_VALUE = "GET_SEARCH_VALUE";

export const searchInputReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEARCH_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const getSearchValueAction = (payload) => ({
  type: GET_SEARCH_VALUE,
  payload,
});
