import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { Toaster } from "sonner"; // 👈 importá Toaster
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
