import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { registerSchema } from "../../helpers/schemas";
import { register } from "../../store/auth/authOperations";

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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [passVisible, setPassVisible] = useState(false);
  const handleClickPassVisible = () => setPassVisible(!passVisible);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      const { name, email, password } = values;
      try {
        dispatch(register({ name, email, password }));
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
          <Label>Name:</Label>
          <Input id="name" type="text" name="name" onChange={handleChange} value={values.name} />
          {touched.name && errors.name ? <div>{errors.name}</div> : null}
        </InputWrapper>
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
        <Button type="submit">Registration</Button>
        <StyledLink to="/login">Already have an account?</StyledLink>
      </ButtonWrapper>
    </Form>
  );
};

export default RegisterForm;
