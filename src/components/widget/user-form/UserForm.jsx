import React, { useEffect, useState } from "react";
import { Button } from "../../base";
import "./user-form.style.css";
import { validateUserForm } from "./manual-validation";
import clsx from "clsx";
import { convertErrors, userSchema } from "./yup-validation";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setPending(true);
    //==================start manual validation===================//
    // const { hasError, fromErrors } = validateUserForm(user);
    // if (hasError) {
    //   setErrors(fromErrors);
    //   return;
    // }
    //==================end manual validation===================//
    //==================start yup validation===================//
    try {
      const value = await userSchema.validate(user, {
        abortEarly: false,
      });
      // start submit form
    } catch (err) {
      setErrors(convertErrors(err.inner));
    }

    //==================end yup validation===================//
    // start form submit
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
        {errors.name ? <span className="">{errors.name}</span> : null}
      </div>
      <div className="form-control">
        <label>
          <span>age</span>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInput}
          />
        </label>
        {errors.age ? <span className="">{errors.age}</span> : null}
      </div>
      <div className="form-control">
        <label>
          <span>email</span>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        {errors.email ? <span className="">{errors.email}</span> : null}
      </div>
      <div className="form-control">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
