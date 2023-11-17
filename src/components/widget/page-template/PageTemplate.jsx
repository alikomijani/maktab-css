import React from "react";
import { Toolbar } from "../toolbar";
import { Outlet } from "react-router-dom";
export function PageTemplate({}) {
  return (
    <div>
      <Toolbar />
      <main>
        <Outlet />
      </main>
      <footer>this is footer</footer>
    </div>
  );
}
