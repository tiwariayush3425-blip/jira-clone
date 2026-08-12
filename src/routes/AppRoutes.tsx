import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/auth/Login";
import Unauthorized from "../pages/Unauthorized";

import ProtectedRoute from "./ProtectedRoute";
import ServerError from "../pages/ServerError";
import Maintenance from "../pages/Maintenance";

function AppRoutes() {
  return (
    <BrowserRouter basename="/jira-clone">
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute allowedRoles={["admin", "manager"]}>
              <Projects />
            </ProtectedRoute>
          }
        />

        {/* Team */}
        <Route
          path="/team"
          element={
            <ProtectedRoute allowedRoles={["admin", "manager"]}>
              <Team />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Settings />
            </ProtectedRoute>
          }
        />
        {/*Unauthorized */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Server Error */}
        <Route path="/500" element={<ServerError />} />

        {/* Maintenance */}
        <Route path="/maintenance" element={<Maintenance />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
