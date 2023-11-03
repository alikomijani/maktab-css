import React from "react";
import { Button, Search, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export function UsersTable() {
  return (
    <div>
      <FlexDiv>
        <Search />
        <Button className={style.button}>create new user</Button>
      </FlexDiv>
      <Table>
        <thead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>username</TableCell>
            <TableCell>first name</TableCell>
            <TableCell>last name</TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow $dark>
            <TableCell>1</TableCell>
            <TableCell>komijani</TableCell>
            <TableCell>Ali</TableCell>
            <TableCell>Komijani</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}
