import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        {/* <Route index element={} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
