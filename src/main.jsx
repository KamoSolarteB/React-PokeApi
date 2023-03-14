import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PokemonProvider } from "./context/PokemonProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </React.StrictMode>
);
