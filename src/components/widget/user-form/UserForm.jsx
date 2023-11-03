import React, { useEffect, useState } from "react";
import { Button } from "../../base";

const initialUser = { id: 1, first_name: "", last_name: "", username: "" };
export function UserForm({ selectedUser = initialUser, onSubmit }) {
  const [user, setUser] = useState(selectedUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      id: 1,
      first_name: "",
      last_name: "",
      username: "",
    });
  };
  const handleInput = (e) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    setUser(selectedUser);
  }, [selectedUser]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>username</span>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <label>
          <span>First name</span>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Last name</span>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
