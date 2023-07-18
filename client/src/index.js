import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./context/movies";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user";
import Carousel from "./components/Misc/Carousel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </UserContextProvider>
);
