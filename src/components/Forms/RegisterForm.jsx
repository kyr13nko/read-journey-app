import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import sprite from "../../assets/images/sprite.svg";
import { StyledLink } from "./Forms.styled";

const RegisterForm = () => {
  const [passVisible, setPassVisible] = useState(false);

  const handleClickPassVisible = () => setPassVisible(!passVisible);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { name, email, password } = values;
      try {
        console.log("name, email, password", name, email, password);
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
          type="text"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
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
        <button type="submit">Registration</button>
        <StyledLink to="/login">Already have an account?</StyledLink>
      </div>
    </form>
  );
};

export default RegisterForm;
