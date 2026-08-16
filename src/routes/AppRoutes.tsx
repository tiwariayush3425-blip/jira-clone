import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

// Lazy-loaded pages
const NotFound = lazy(() => import("../pages/NotFound"));
const Settings = lazy(() => import("../pages/Settings"));
const Profile = lazy(() => import("../pages/Profile"));
const Team = lazy(() => import("../pages/Team"));
const Projects = lazy(() => import("../pages/Projects"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));
const Unauthorized = lazy(() => import("../pages/Unauthorized"));
const ServerError = lazy(() => import("../pages/ServerError"));
const Maintenance = lazy(() => import("../pages/Maintenance"));

function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
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

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Server Error */}
          <Route path="/500" element={<ServerError />} />

          {/* Maintenance */}
          <Route path="/maintenance" element={<Maintenance />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default AppRoutes;