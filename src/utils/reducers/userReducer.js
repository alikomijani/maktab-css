export function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case UsersActionType.ADD_USER:
      return [...state, payload];
    case UsersActionType.UPDATE_USER:
      return state.map((item) => (item.id === payload.id ? payload : item));
    case UsersActionType.DELETE_USER:
      return state.filter((item) => item.id !== payload.id);
  }
  throw Error("Unknown action.");
}

export const UsersActionType = {
  ADD_USER: "add_user",
  UPDATE_USER: "update_user",
  DELETE_USER: "delete_user",
};
