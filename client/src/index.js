import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./context/movies";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user";
import Dropdown from "./components/Misc/Dropdown";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <MovieProvider>
      <BrowserRouter>
        <Dropdown />
      </BrowserRouter>
    </MovieProvider>
  </UserContextProvider>
);
