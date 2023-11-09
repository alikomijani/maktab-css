// @ts-nocheck
import "./App.css";
import { UsersTable, UserForm } from "./components";
import { UserProvider } from "./utils/contexts";
function App() {
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      />

      <UserProvider>
        <UsersTable />
        <UserForm />
      </UserProvider>
    </div>
  );
}
export default App;
