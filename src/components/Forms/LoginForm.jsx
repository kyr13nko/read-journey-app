import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/auth/authOperations";

import { useFormik } from "formik";
import * as Yup from "yup";

import sprite from "../../assets/images/sprite.svg";
import { StyledLink } from "./Forms.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [passVisible, setPassVisible] = useState(false);

  const handleClickPassVisible = () => setPassVisible(!passVisible);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        console.log("email, password", email, password);

        dispatch(login({ email, password }));
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <input
          type={passVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <svg onClick={handleClickPassVisible}>
          {passVisible ? <use href={`${sprite}#eye`} /> : <use href={`${sprite}#eye-off`} />}
        </svg>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <button type="submit">Log In</button>
        <StyledLink to="/register">Don’t have an account?</StyledLink>
      </div>
    </form>
  );
};

export default LoginForm;
