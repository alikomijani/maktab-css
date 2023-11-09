import React, { memo } from "react";
import { Button } from "../../base";

export default memo(function UserProfile({ user, sendEmail }) {
  console.log("render profile--------");
  if (!user) {
    return null;
  }
  console.log("render profile--------");

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
      <div>first name : {user.first_name}</div>
      <div>last name : {user.last_name}</div>
      <div>
        <Button onClick={sendEmail}>Send Email</Button>
      </div>
    </div>
  );
});

function isEqual(prevProps, nextProps) {
  if (prevProps.count === nextProps.count) {
    return true;
  }
  if (prevProps.count > 98 && nextProps.count > 98) {
    return true;
  }
  return false;
}
export const Notification = memo(function NotificationBadge({ count }) {
  if (count > 98) {
    return <div>{+99}</div>;
  }
  return <div>{count}</div>;
}, isEqual);
