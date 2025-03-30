import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./app.jsx";
import Login from "./components/login.jsx";
import Homepage from "./views/homepage.jsx";
import ProtectedRoute from "./middleware/protectedRoute.jsx";
import Logout from "./components/logout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        element: <ProtectedRoute />, // middleware aquí
        children: [
          {
            path: "homepage",
            element: <Homepage />,
          },
        ],
      },
      {
        index: true,
        element: <Navigate to="/homepage" />,
      },
    ],
  },
]);
