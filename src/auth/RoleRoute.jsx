import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function RoleRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default RoleRoute;