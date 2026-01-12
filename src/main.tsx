import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Weather from "./pages/Weather";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Weather></Weather>
  </StrictMode>,
);
