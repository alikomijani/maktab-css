import React, { useContext, useState, useCallback, useMemo } from "react";
import { Button, Search, Table, TableCell, TableRow } from "../../base";
import style from "./user-table.module.css";
import styled from "styled-components";
import { UserContext } from "../../../utils/contexts";
import { UsersActionType } from "../../../utils/reducers";
import UserProfile from "../user-profile/UserProfile";
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ColumnNames = ["ID", "Username", "First name", "Last name", "action"];
export function UsersTable() {
  const [search, setSearch] = useState("");
  const { usersData, dispatchUsers } = useContext(UserContext);
  console.log("render");
  const averageAge = useMemo(() => {
    console.log("re calculate!!");
    return (
      usersData.users.reduce((acc, user) => user.age + acc, 0) /
      usersData.users.length
    );
  }, [usersData.users]);

  console.log(averageAge);

  const sendEmail = useCallback(() => {
    alert("email was send to " + usersData.selectedUser.username);
  }, [usersData?.selectedUser?.username]);

  return (
    <div>
      <FlexDiv>
        <Search value={search} onSubmit={setSearch} />
        <Button
          onClick={() =>
            dispatchUsers({ type: UsersActionType.SELECT_USER, payload: null })
          }
          className={style.button}
        >
          create new user
        </Button>
      </FlexDiv>
      <Table>
        <thead>
          <TableRow>
            {ColumnNames.map((columName) => (
              <TableCell key={columName}>{columName}</TableCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {usersData.users
            .filter((user) => user.first_name.startsWith(search))
            .map((user) => (
              <TableRow $dark key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      dispatchUsers({
                        type: UsersActionType.SELECT_USER,
                        payload: user,
                      })
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() =>
                      dispatchUsers({
                        type: UsersActionType.DELETE_USER,
                        payload: user,
                      })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
      <UserProfile user={usersData.selectedUser} sendEmail={sendEmail} />
    </div>
  );
}
