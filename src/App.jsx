// @ts-nocheck
import "./App.css";
import { FormikUserForm, UsersTable } from "./components";
import { useQuery } from "react-query";
import { createUser, getUsers, updateUser } from "./api";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const { error, isLoading, data } = useQuery(["users", search], () =>
    getUsers(search || null)
  );

  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      />
      <FormikUserForm
        onSubmit={(user) => {
          if (selectedUser) {
            return updateUser(selectedUser.id, user);
          } else {
            return createUser(user);
          }
        }}
        initialValue={selectedUser}
      />
      {error ? (
        <h1>error</h1>
      ) : isLoading ? (
        <h1>...loading</h1>
      ) : (
        <UsersTable
          users={data}
          selectedUser={selectedUser}
          setSearch={setSearch}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}
export default App;
