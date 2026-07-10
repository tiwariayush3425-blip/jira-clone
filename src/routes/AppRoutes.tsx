import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
   <BrowserRouter basename="/jeera-clone">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;