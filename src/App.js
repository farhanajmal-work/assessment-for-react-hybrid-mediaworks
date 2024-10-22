import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import React from "react";

const isAuthenticated = () => {
  const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  return storedCredentials && storedCredentials.email; // Check if email exists
};

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? Component : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/signup"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" /> : <SignUp />
          }
        />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />

        {/* Redirect to login if no route is matched */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
