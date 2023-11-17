import React, { memo } from "react";

export default memo(function UserProfile({ user }) {
  if (!user) {
    return null;
  }
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        borderRadius: "8px",
        margin: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        fontSize: "2rem",
      }}
    >
      <div>user id : {user.id}</div>
      <div>username : {user.username}</div>
      <div>name : {user.name}</div>
      <div>Email : {user.email}</div>
    </div>
  );
});
