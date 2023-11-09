// const userDate = {
//   selectedUser:null | User;
//   users :[]
export function userReducer(oldState, action) {
  const { type, payload } = action;
  switch (type) {
    case UsersActionType.ADD_USER:
      return {
        ...oldState,
        users: [...oldState.users, payload],
      };
    case UsersActionType.UPDATE_USER:
      return {
        selectedUser: null,
        users: oldState.users.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case UsersActionType.DELETE_USER:
      return {
        selectedUser: null,
        users: oldState.users.filter((item) => item.id !== payload.id),
      };
    case UsersActionType.SELECT_USER:
      return {
        ...oldState,
        selectedUser: payload,
      };
  }
  throw Error("Unknown action.");
}

export const UsersActionType = {
  ADD_USER: "add_user",
  UPDATE_USER: "update_user",
  DELETE_USER: "delete_user",
  SELECT_USER: "select_user",
};
