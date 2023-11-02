// @ts-nocheck
import "./App.css";
import { UsersTable, ProductTable } from "./components/widget";
import { Button } from "./components/base";
function App() {
  return (
    <div className="">
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => alert("product not ready yet!")}
        >
          create new user
        </Button>
        <Button variant="link" onClick={() => alert("product not ready yet!")}>
          create new user
        </Button>
        <Button
          variant="outlined"
          onClick={() => alert("product not ready yet!")}
        >
          create new user
        </Button>
      </div>

      <br />
      <br />
      <UsersTable />
      <br />
      <br />
      <ProductTable />
    </div>
  );
}
export default App;
