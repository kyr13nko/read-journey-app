import * as Yup from "yup";

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must not exceed 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailPattern, "The email must be in format: test@test.com")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .max(16, "Password must not exceed 16 characters")
    .required("Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(emailPattern, "The email must be in format: test@test.com")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .max(16, "Password must not exceed 16 characters")
    .required("Password is required"),
});
