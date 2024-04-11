import { lazy } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { refresh } from "../store/auth/authOperations";
import { useAuth } from "../hooks/useAuth";

import Layout from "./Layout/Layout";

import { RestrictedRoute } from "../guards/RestrictedRoute";
import { PrivateRoute } from "../guards/PrivateRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

const Recommended = lazy(() => import("../pages/Recommended/Recommended"));
const Library = lazy(() => import("../pages/Library/Library"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLogin } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing...</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={isLogin ? <Navigate to="/recommended" /> : <Navigate to="/register" />}
          />

          <Route
            path="register"
            element={<RestrictedRoute redirectTo={"/recommended"} component={<Register />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute redirectTo={"/recommended"} component={<Login />} />}
          />

          <Route
            path="library"
            element={<PrivateRoute redirectTo="/register" component={<Library />} />}
          />
          <Route
            path="recommended"
            element={<PrivateRoute redirectTo="/register" component={<Recommended />} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default App;
