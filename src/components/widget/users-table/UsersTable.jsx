import React, { useState } from "react";
import { Button, Search, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
import styled from "styled-components";
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ColumnNames = ["ID", "Username", "First name", "Last name", "action"];
export function UsersTable({ users, setUsers, setSelectedUser }) {
  const [search, setSearch] = useState("");
  const deleteUser = (user) => {
    setUsers((oldUsers) => oldUsers.filter((item) => item.id !== user.id));
  };

  return (
    <div>
      <FlexDiv>
        <Search value={search} onSubmit={setSearch} />
        <Button onClick={() => setSelectedUser()} className={style.button}>
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
            .filter((user) => user.first_name.startsWith(search))
            .map((user) => (
              <TableRow $dark key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>
                  <Button onClick={() => setSelectedUser(user)}>Edit</Button>
                  <Button onClick={() => deleteUser(user)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
