import React from "react";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import CreateUser from "../pages/create-user/CreateUser";
import UserProfilePage from "../pages/user-profile/UserProfilePage";
import UpdateUser from "../pages/update-user/UpdateUser";
import { createBrowserRouter } from "react-router-dom";
import { PageTemplate } from "../components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userID",
        element: <UserProfilePage />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      },
      {
        path: "users/:userID/update",
        element: <UpdateUser />,
      },
    ],
  },
]);
export default router;
