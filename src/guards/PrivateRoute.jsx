import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLogin, isRefreshing } = useAuth();
  const shouldRedirect = !isLogin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
