import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "../styles/App.css";
import { Customer } from "../pages/Customer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Customer />,
    },
    {
      path: "/customer",
      element: <Customer />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
