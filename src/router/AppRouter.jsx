import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "../auth/ProtectedRoute";
import RoleRoute from "../auth/RoleRoute";

function AppRouter() {
  return (
    <Routes>
      {/* refdirect*/}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

{/* admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["admin"]}>
              <Admin />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />

      {/*  all unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;


