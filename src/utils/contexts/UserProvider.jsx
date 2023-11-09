import React, { createContext, useReducer } from "react";

import { DEFAULT_USER_DATA } from "../../components/widget/users-table/data";
import { userReducer } from "../reducers";

export const UserContext = createContext({
  usersData: {
    selectedUser: null,
    users: [],
  },
  dispatchUsers: (action) => {},
});
export function UserProvider({ children }) {
  const [usersData, dispatchUsers] = useReducer(userReducer, {
    selectedUser: null,
    users: DEFAULT_USER_DATA,
  });
  return (
    <UserContext.Provider
      value={{
        usersData,
        dispatchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
