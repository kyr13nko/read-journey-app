import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import RestrictedRoute from "../guards/RestrictedRoute";
import PrivateRoute from "../guards/PrivateRoute";

import { refresh } from "../store/auth/authOperations";
import { useAuth } from "../hooks/useAuth";

import Layout from "./Layout/Layout";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Recommended from "../pages/Recommended/Recommended";
import Library from "../pages/Library/Library";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing...</div>
  ) : (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute redirectTo="/" component={<div>No Data</div>} />} />

          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/recommended" component={<Login />} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute redirectTo="/recommended" component={<Register />} />}
          />

          <Route
            path="/recommended"
            element={<PrivateRoute redirectTo="/register" component={<Recommended />} />}
          />
          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/register" component={<Library />} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes> */}

      <Layout>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute redirectTo="/" component={<div>No Data</div>} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/recommended" component={<Login />} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute redirectTo="/recommended" component={<Register />} />}
          />
          <Route
            path="/recommended"
            element={<PrivateRoute redirectTo="/register" component={<Recommended />} />}
          />
          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/register" component={<Library />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>

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
