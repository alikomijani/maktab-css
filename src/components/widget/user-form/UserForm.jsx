import React, { useEffect, useState } from "react";
import { Button } from "../../base";
import "./user-form.style.css";
import { validateUserForm } from "./validation";
import clsx from "clsx";
const emptyUser = {
  username: "",
  name: "",
  email: "",
  age: 0,
};
export function UserForm({ initialValue = emptyUser, onSubmit, ...props }) {
  const [user, setUser] = useState(initialValue || emptyUser);
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(false);
  console.log({ errors });
  const handleSubmit = (e) => {
    e.preventDefault();
    // setPending(true);
    const { hasError, fromErrors } = validateUserForm(user);
    console.log({ hasError, fromErrors });
    if (hasError) {
      setErrors(fromErrors);
      return;
    }
    // onSubmit(user)
    //   .then(() => {
    //     alert("success");
    //     setUser(emptyUser);
    //   })
    //   .catch((error) => {
    //     if (error) {
    //       console.log(error.data);
    //     }
    //   })
    //   .finally(() => {
    //     setPending(false);
    //   });
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
      <div className="form-control">
        <label htmlFor="username_id">
          <span>username</span>
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInput}
          required
          className={clsx(errors.username && "input-error")}
        />
        {errors.username ? <span className="">{errors.username}</span> : null}
      </div>
      <div className="form-control">
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
      <div className="form-control">
        <label>
          <span>age</span>
          <input
            type="number"
            name="age"
            max={18}
            min={10}
            value={user.age}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="form-control">
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
      <div className="form-control">
        <Button disabled={pending} type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
