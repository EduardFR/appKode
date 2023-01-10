const defaultState = {
  selectedTab: "all",
};

const ADD_CLASS_ACTIVE = "ADD_CLASS_ACTIVE";

export const selectedTabReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CLASS_ACTIVE:
      return { ...state, selectedTab: action.payload };

    default:
      return state;
  }
};

export const addClassActiveAction = (payload) => ({
  type: ADD_CLASS_ACTIVE,
  payload,
});
