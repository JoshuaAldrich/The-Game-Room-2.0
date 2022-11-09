import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);

//components

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
