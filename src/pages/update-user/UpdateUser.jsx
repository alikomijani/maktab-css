import React, { useEffect, useState } from "react";
import { FormikUserForm } from "../../components";
import { getUser, updateUser } from "../../api";
import { useParams } from "react-router-dom";

const emptyUser = {
  username: "",
  name: "",
  email: "",
  age: 0,
};
function UpdateUser({}) {
  const [user, setUser] = useState(emptyUser);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { userID } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getUser(userID)
      .then((user) => {
        setUser(user);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userID]);

  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <FormikUserForm
      onSubmit={(user) => {
        return updateUser(userID, user);
      }}
      initialValue={user}
    />
  );
}

export default UpdateUser;
