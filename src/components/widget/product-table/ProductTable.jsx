import React from "react";
import { Table, TableRow, TableCell } from "../../base";
export function ProductTable() {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>price</TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>monitor</TableCell>
          <TableCell>1000$</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
}
