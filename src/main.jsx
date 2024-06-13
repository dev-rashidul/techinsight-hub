import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import ProfileProvider from "./providers/ProfileProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ProfileProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ProfileProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
