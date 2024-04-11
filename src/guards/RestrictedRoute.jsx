import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const location = useLocation();
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={location.state?.from ?? redirectTo} /> : Component;
};
