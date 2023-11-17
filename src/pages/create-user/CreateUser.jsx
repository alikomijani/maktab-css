import React from "react";
import { FormikUserForm } from "../../components/widget";
import { createUser } from "../../api/users";

function CreateUser({}) {
  return (
    <FormikUserForm
      onSubmit={(user) => {
        return createUser(user);
      }}
    />
  );
}

export default CreateUser;
