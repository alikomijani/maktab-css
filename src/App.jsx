// @ts-nocheck
import { useState } from "react";
import "./App.css";
import { UsersTable, UserForm } from "./components";
import { DEFAULT_USER_DATA } from "./components/widget/users-table/data";
function App() {
  const [users, setUsers] = useState(DEFAULT_USER_DATA);
  const [selectedUser, setSelectedUser] = useState();
  const addUser = (newUser) => {
    setUsers((oldUsers) => [...oldUsers, newUser]);
  };
  const updateUser = (newUser) => {
    setUsers((oldUsers) =>
      oldUsers.map((item) => (item.id === newUser.id ? newUser : item))
    );
    setSelectedUser();
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
        setUsers={setUsers}
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
