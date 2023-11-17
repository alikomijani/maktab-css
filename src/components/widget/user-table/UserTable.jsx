import React, { useState } from "react";
import { Button, Search, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
import styled from "styled-components";
import UserProfile from "../user-profile/UserProfile";
import { Link, useNavigate } from "react-router-dom";
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ColumnNames = ["ID", "Username", "name", "email", "action"];
export function UsersTable({ users, deleteUser, setSearch }) {
  const navigate = useNavigate();
  return (
    <div>
      <FlexDiv>
        <Search onSubmit={setSearch} />
        <Button onClick={() => navigate("create-new")}>create new user</Button>
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
          {users.map((user) => (
            <TableRow
              $dark
              key={user.id}
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            >
              <TableCell>
                <Link to={`/users/${user.id}`}>{user.id}</Link>
              </TableCell>
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
    </div>
  );
}
