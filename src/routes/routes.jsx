import React from "react";
import Home from "../pages/home/Home";
import CreateUser from "../pages/create-user/CreateUser";
import UserProfilePage from "../pages/user-profile/UserProfilePage";
import { createBrowserRouter } from "react-router-dom";
import { PageTemplate } from "../components";

const Users = React.lazy(() => import("../pages/users/Users"));
const UpdateUser = React.lazy(() => import("../pages/update-user/UpdateUser"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/users",
    element: <PageTemplate />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense
            fallback={
              <h1
                style={{
                  fontSize: "10rem",
                }}
              >
                ...loading
              </h1>
            }
          >
            <Users />
          </React.Suspense>
        ),
      },

      {
        path: ":userID",
        element: <UserProfilePage />,
      },
      {
        path: "create-user",
        element: <CreateUser />,
      },
      {
        path: ":userID/update",
        element: (
          <React.Suspense fallback={<h1>...loading</h1>}>
            <UpdateUser />
          </React.Suspense>
        ),
      },
    ],
  },
]);
export default router;
