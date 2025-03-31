import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Homepage from "./views/homepage.jsx";
import Mainview from "./views/mainview.jsx";
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
        path: "register",
        element: <Register />,
      },
      {
        path: "mainview",
        element: <Mainview />,
      },
      { index: true, element: <Navigate to="/mainview" /> }, // Redirigir a mainview por defecto
      {
        element: <ProtectedRoute />, // middleware aquí
        children: [
          {
            path: "homepage",
            element: <Homepage />,
          },
        ],
      },
    ],
  },
]);
