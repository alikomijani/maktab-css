import React, { useEffect, useState } from "react";
import UserProfile from "../../components/widget/user-profile/UserProfile";
import { getUser } from "../../api";
import { useParams } from "react-router-dom";
const emptyUser = {
  username: "",
  name: "",
  email: "",
  age: 0,
};

function UserProfilePage() {
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

  return <UserProfile user={user} />;
}

export default UserProfilePage;
