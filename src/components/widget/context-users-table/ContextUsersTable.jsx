import React, { useContext } from "react";
import { UserContext } from "../../../utils/contexts";
import { UsersActionType } from "../../../utils/reducers";
import { UsersTable } from "../user-table";

export function ContextUsersTable() {
  const { usersData, dispatchUsers } = useContext(UserContext);
  return (
    <UsersTable
      users={usersData.users}
      selectedUser={usersData.selectedUser}
      setSelectedUser={(user) =>
        dispatchUsers({ type: UsersActionType.SELECT_USER, payload: user })
      }
      deleteUser={(user) =>
        dispatchUsers({ type: UsersActionType.DELETE_USER, payload: user })
      }
    />
  );
}
