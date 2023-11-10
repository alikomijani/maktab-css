// @ts-nocheck
import "./App.css";
import { UserForm, UsersTable } from "./components";
import { useGetUsers, createUser, updateUser } from "./api";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const {
    error: usersError,
    loading: usersLoading,
    users,
  } = useGetUsers(search ? search : null);

  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      />
      <UserForm
        onSubmit={(user) => {
          if (selectedUser) {
            return updateUser(selectedUser.id, user);
          } else {
            return createUser(user);
          }
        }}
        initialValue={selectedUser}
      />
      {usersError ? (
        <h1>error</h1>
      ) : usersLoading ? (
        <h1>...loading</h1>
      ) : (
        <UsersTable
          users={users}
          selectedUser={selectedUser}
          setSearch={setSearch}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}
export default App;
