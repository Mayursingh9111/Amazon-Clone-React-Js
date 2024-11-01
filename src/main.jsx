import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./Context/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
