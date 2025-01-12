import React from "react";
import ReactDOM from "react-dom/client"; // Importing from "react-dom/client"
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";


// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
