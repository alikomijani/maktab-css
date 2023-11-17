import React, { useState } from "react";
import { UsersTable } from "../../components";
import { useQuery } from "react-query";
import { getUsers } from "../../api/users";

function Users() {
  const [search, setSearch] = useState("");
  const { error, isLoading, data } = useQuery(["users", search], () =>
    getUsers(search || null)
  );

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <UsersTable users={data} setSearch={setSearch} deleteUser={() => {}} />
  );
}

export default Users;
