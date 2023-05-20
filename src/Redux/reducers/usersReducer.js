// import { emptyActions } from "../actions/emptyActions";

export function usersReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    default:
      return state;
  }
}
