// @ts-nocheck
import "./App.css";
import { UsersTable, ProductTable } from "./components/widget";
import { Button } from "./components/Base";
function App() {
  return (
    <div className="">
      <Button onClick={() => alert("product not ready yet!")}>
        create new user
      </Button>
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
