import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ redirectTo, component: Component }) => {
  const location = useLocation();
  const { isLogin, isRefreshing } = useAuth();
  const shouldRedirect = !isLogin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} state={{ from: location }} /> : Component;
};
