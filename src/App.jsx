// @ts-nocheck
import { useReducer, useState } from "react";
import "./App.css";
import { UsersTable, UserForm } from "./components";
import { userReducer, UsersActionType } from "./utils/reducers";
import { DEFAULT_USER_DATA } from "./components/widget/users-table/data";
function App() {
  // const [users, setUsers] = useState(DEFAULT_USER_DATA);
  const [users, dispatchUsers] = useReducer(userReducer, DEFAULT_USER_DATA);
  const [selectedUser, setSelectedUser] = useState();
  const addUser = (newUser) => {
    dispatchUsers({ type: UsersActionType.ADD_USER, payload: newUser });
  };
  const updateUser = (newUser) => {
    dispatchUsers({ type: UsersActionType.UPDATE_USER, payload: newUser });
    setSelectedUser();
  };
  const deleteUser = (newUser) => {
    dispatchUsers({ type: UsersActionType.DELETE_USER, payload: newUser });
  };
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      />
      <UsersTable
        users={users}
        deleteUser={deleteUser}
        setSelectedUser={setSelectedUser}
      />
      <UserForm
        onSubmit={selectedUser ? updateUser : addUser}
        selectedUser={selectedUser}
      />
    </div>
  );
}
export default App;
