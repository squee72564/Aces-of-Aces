import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Toaster } from "@/components/ui/sonner";
import App from "@/App";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <App/>
    <Toaster/>
  </StrictMode>
);