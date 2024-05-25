import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const location = useLocation();
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={location.state?.from ?? redirectTo} /> : Component;
};
