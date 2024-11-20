import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"
import {BrowserRouer} from "react-router-dom"
import { AppContextProvider } from "./Context/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouer>
      <AppContextProvider>
        <App />
      </AppContextProvider>
  </BrowserRouer>
  
);
