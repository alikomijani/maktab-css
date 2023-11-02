import React from "react";
import { Button, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
export function UsersTable() {
  return (
    <div>
      <Button className={style.button}>create new user</Button>
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
          <TableRow>
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
