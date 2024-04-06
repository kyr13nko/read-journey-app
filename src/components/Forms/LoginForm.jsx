import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { loginSchema } from "../../helpers/schemas";
import { login } from "../../store/auth/authOperations";

import sprite from "../../assets/images/sprite.svg";
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  InputWrapper,
  Label,
  PassSvg,
  StyledLink,
  Wrapper,
} from "./Forms.styled";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [passVisible, setPassVisible] = useState(false);
  const handleClickPassVisible = () => setPassVisible(!passVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        dispatch(login({ email, password }));
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <InputWrapper>
          <Label>Mail:</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}
        </InputWrapper>
        <InputWrapper>
          <Label>Password:</Label>
          <Input
            id="password"
            type={passVisible ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <PassSvg onClick={handleClickPassVisible}>
            {passVisible ? <use href={`${sprite}#eye`} /> : <use href={`${sprite}#eye-off`} />}
          </PassSvg>
          {touched.password && errors.password ? <div>{errors.password}</div> : null}
        </InputWrapper>
      </Wrapper>

      <ButtonWrapper>
        <Button type="submit">Log In</Button>
        <StyledLink to="/register">Don’t have an account?</StyledLink>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
