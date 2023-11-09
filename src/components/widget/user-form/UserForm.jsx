import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../base";
import { UserContext } from "../../../utils/contexts";
import { UsersActionType } from "../../../utils/reducers";

const emptyUser = {
  id: 1,
  username: "",
  first_name: "",
  last_name: "",
};
export function UserForm() {
  const { usersData, dispatchUsers } = useContext(UserContext);
  const [user, setUser] = useState(emptyUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usersData.selectedUser) {
      dispatchUsers({
        type: UsersActionType.UPDATE_USER,
        payload: { ...user, age: usersData.selectedUser.age },
      });
    } else {
      dispatchUsers({
        type: UsersActionType.ADD_USER,
        payload: { ...user, age: 12 },
      });
    }
    setUser(emptyUser);
  };
  const handleInput = (e) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    setUser(usersData.selectedUser ? usersData.selectedUser : emptyUser);
  }, [usersData.selectedUser]);
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
