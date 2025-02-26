import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../public/assets/css/fonts.css"; // Importa las fuentes aquí
import App from "./app/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
