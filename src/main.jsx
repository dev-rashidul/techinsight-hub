import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import BlogProvider from "./providers/BlogProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <BlogProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BlogProvider>
      </Router>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
