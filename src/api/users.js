import axios from "axios";
import { useEffect, useState } from "react";

export async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetUsers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return {
    users,
    error,
    loading,
  };
}
