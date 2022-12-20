import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { selectedTabReducer } from "./activeReducer";
import { searchInputReducer } from "./searchInputReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  selectedTab: selectedTabReducer,
  searchInput: searchInputReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
