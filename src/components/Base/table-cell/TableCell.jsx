import React from "react";

export function TableCell({ children, ...props }) {
  return (
    <td
      {...props}
      style={{
        padding: "15px",
        border: "1px solid black",
      }}
    >
      {children}
    </td>
  );
}
