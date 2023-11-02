import React from "react";

export function Button({ style, children, ...restProps }) {
  return (
    <button
      {...restProps}
      style={{
        padding: "1rem",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: ".25rem",
        backgroundColor: "white",
        color: "green",
        border: "1px solid green",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
