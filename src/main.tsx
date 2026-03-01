import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <App></App>
);
