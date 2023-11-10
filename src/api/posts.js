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
