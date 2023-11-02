import React from "react";

export function Table({ style, children, ...props }) {
  return (
    <table
      {...props}
      style={{
        border: "1px solid black",
        padding: "0.5rem",
        borderCollapse: "collapse",
        ...style,
      }}
    >
      {children}
    </table>
  );
}
