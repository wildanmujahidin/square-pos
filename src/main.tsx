import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./styles/index.css";
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProSidebarProvider>
    <App />
  </ProSidebarProvider>
);
