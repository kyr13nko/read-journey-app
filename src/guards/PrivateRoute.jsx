import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLogin, isRefreshing } = useAuth();
  const shouldRedirect = !isLogin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const PrivateRoute = ({ element: Element, redirectTo = "/", ...rest }) => {
//   const { isLogin, isRefreshing } = useAuth();

//   if (isRefreshing) {
//     return <div>Refreshing...</div>;
//   }

//   return <Route {...rest} element={isLogin ? <Element /> : <Navigate to={redirectTo} replace />} />;
// };

// export default PrivateRoute;
