import { createRoot } from "react-dom/client";
import App from "./components/App";
import { StrictMode } from "react";

import "./styles/index.css";
import "./styles/reset.css";
import "./styles/variables.css";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
