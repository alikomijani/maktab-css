import axios from "axios";
import { useEffect, useState } from "react";

export async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return {
    posts,
    error,
    loading,
  };
}
// example of custom hook
export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter((old) => old + 1);
  };
  const decrement = () => {
    setCounter((old) => old - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return [counter, increment, decrement, reset];
}
