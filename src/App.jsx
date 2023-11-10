// @ts-nocheck
import "./App.css";
import { UsersTable } from "./components";
import { useGetPosts, useGetUsers } from "./api";
function App() {
  const { error: postsError, loading: postsLoading, posts } = useGetPosts();
  const { error: usersError, loading: usersLoading, users } = useGetUsers();
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      />
      {usersError ? (
        <h1>error</h1>
      ) : usersLoading ? (
        <h1>...loading</h1>
      ) : (
        <UsersTable users={users} />
      )}
      {postsError ? (
        <h1>error</h1>
      ) : postsLoading ? (
        <h1>...loading</h1>
      ) : (
        posts.map((post) => <h2 key={post.id}>{post.title}</h2>)
      )}
    </div>
  );
}
export default App;
