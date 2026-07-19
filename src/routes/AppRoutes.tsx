import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";


function AppRoutes() {

  return (

    <BrowserRouter basename="/jira-clone">

      <Routes>

        {/* Login public route */}
        <Route
          path="/login"
          element={<Login />}
        />


        {/* Protected Dashboard */}
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


        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />


        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />


        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />


        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

    </BrowserRouter>

  );
}


export default AppRoutes;