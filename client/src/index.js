import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./context/movies";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user";
import { TicketProvider } from "./context/tickets";
import { ExtraProvider } from "./context/extras";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ExtraProvider>
    <TicketProvider>
      <UserContextProvider>
        <MovieProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MovieProvider>
      </UserContextProvider>
    </TicketProvider>
  </ExtraProvider>
);
