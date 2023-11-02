import React from "react";
import { Table, TableCell, TableRow } from "../../Base";

export function UsersTable() {
  return (
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
  );
}
