import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { selectedTabReducer } from "./activeReducer";
import { searchInputReducer } from "./searchInputReducer";
import { popupReducer } from "./popupReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  selectedTab: selectedTabReducer,
  searchInput: searchInputReducer,
  popup: popupReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
