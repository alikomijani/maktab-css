import axios from "axios";
import { useEffect, useState } from "react";

export async function getUsers(username) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: {
          username,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function createUser(user) {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    console.log(error);
  }
}

export async function updateUser(userID, user) {
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${userID}`,
      user
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    console.log(error);
  }
}
export function useGetUsers(username) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers(username)
      .then(setUsers)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);
  return {
    users,
    error,
    loading,
  };
}
