import React from "react";

export function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>;
}
