import React, { useState } from "react";
import { Button, Search, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
import styled from "styled-components";
import UserProfile from "../user-profile/UserProfile";
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ColumnNames = ["ID", "Username", "name", "email", "action"];
export function UsersTable({
  users,
  setSelectedUser,
  deleteUser,
  selectedUser,
}) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <FlexDiv>
        <Search value={search} onSubmit={setSearch} />
        <Button onClick={() => setSelectedUser(null)} className={style.button}>
          create new user
        </Button>
      </FlexDiv>
      <Table>
        <thead>
          <TableRow>
            {ColumnNames.map((columName) => (
              <TableCell key={columName}>{columName}</TableCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {users
            .filter((user) => user.name.startsWith(search))
            .map((user) => (
              <TableRow $dark key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button onClick={() => setSelectedUser(user)}>Edit</Button>
                  <Button onClick={() => deleteUser(user)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
      <UserProfile user={selectedUser} />
    </div>
  );
}
