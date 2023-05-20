import { createStore, combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";

const allReducers = combineReducers({
  usersList: usersReducer,
});

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
