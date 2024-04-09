import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLogin } = useAuth();

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};

// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const RestrictedRoute = ({ element: Element, redirectTo = "/", ...rest }) => {
//   const { isLogin, isRefreshing } = useAuth();

//   if (isRefreshing) {
//     return <div>Refreshing...</div>;
//   }

//   return (
//     <Route {...rest} element={!isLogin ? <Element /> : <Navigate to={redirectTo} replace />} />
//   );
// };

// export default RestrictedRoute;
