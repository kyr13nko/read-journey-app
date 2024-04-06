import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
