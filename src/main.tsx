import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Example from "./component/Example.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Example />
  </StrictMode>
);
