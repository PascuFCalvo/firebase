import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { Toaster } from "sonner"; // 👈 importá Toaster

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Toaster position="top-center" richColors /> {/* 👈 aquí lo montás */}
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
