const defaultState = {
  toggle: false,
  value: "alphabet",
};

const TOGGLE_TRUE_FALSE = "TOGGLE_TRUE_FALSE";
const SORT_RADIO_VALUE = "SORT_RADIO_VALUE";

export const popupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_TRUE_FALSE:
      return { ...state, toggle: action.payload };
    case SORT_RADIO_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const sortRadioValueAction = (payload) => ({
  type: SORT_RADIO_VALUE,
  payload,
});

export const toggleTrueFalseAction = (payload) => ({
  type: TOGGLE_TRUE_FALSE,
  payload,
});
