import React, { useEffect, useState } from "react";
import { Button } from "../../base";

const emptyUser = {
  username: "",
  name: "",
  email: "",
};
export function UserForm({ initialValue = emptyUser, onSubmit, ...props }) {
  const [user, setUser] = useState(initialValue || emptyUser);
  const [pending, setPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    onSubmit(user)
      .then(() => {
        alert("success");
        setUser(emptyUser);
      })
      .catch((error) => {
        if (error) {
          console.log(error.data);
        }
      })
      .finally(() => {
        setPending(false);
      });
  };
  const handleInput = (e) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (initialValue) {
      setUser(initialValue);
    } else {
      setUser(emptyUser);
    }
  }, [initialValue]);
  return (
    <form onSubmit={handleSubmit} {...props}>
      <div>
        <label>
          <span>username</span>
          <input
            type="text"
            name="username"
            required
            value={user.username}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <label>
          <span>name</span>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <label>
          <span>email</span>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
      </div>
      <div>
        <Button disabled={pending} type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
