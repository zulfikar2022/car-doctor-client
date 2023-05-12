import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders";




ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-4/5 mx-auto">
    <React.StrictMode>
      <AuthProviders>
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </React.StrictMode>
  </div>
);
