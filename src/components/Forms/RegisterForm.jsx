import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { register } from "../../store/auth/authOperations";

import { registerSchema } from "../../helpers/schemas";

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
import { ErrorMessage, MessageSvg, SuccessMessage } from "../../styles/GlobalStyles";

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
        console.warn(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <InputWrapper>
          <Label>Name:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name Surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            style={{
              borderColor:
                touched.name && errors.name
                  ? "var(--color-red)"
                  : touched.name && !errors.name
                  ? "var(--color-green)"
                  : "transparent",
            }}
          />

          {touched.name && errors.name ? (
            <MessageSvg>
              <use href={`${sprite}#error`} />
            </MessageSvg>
          ) : touched.name && !errors.name ? (
            <MessageSvg>
              <use href={`${sprite}#success`} />
            </MessageSvg>
          ) : null}

          {touched.name && errors.name ? (
            <ErrorMessage>{errors.name}</ErrorMessage>
          ) : (
            touched.name && <SuccessMessage>Name is correct!</SuccessMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label>Mail:</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your@email.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            style={{
              borderColor:
                touched.email && errors.email
                  ? "var(--color-red)"
                  : touched.email && !errors.email
                  ? "var(--color-green)"
                  : "transparent",
            }}
          />

          {touched.email && errors.email ? (
            <MessageSvg>
              <use href={`${sprite}#error`} />
            </MessageSvg>
          ) : touched.email && !errors.email ? (
            <MessageSvg>
              <use href={`${sprite}#success`} />
            </MessageSvg>
          ) : null}

          {touched.email && errors.email ? (
            <ErrorMessage>{errors.email}</ErrorMessage>
          ) : (
            touched.email && <SuccessMessage>Email is correct!</SuccessMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label>Password:</Label>
          <Input
            id="password"
            type={passVisible ? "text" : "password"}
            name="password"
            placeholder="Yourpasswordhere"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            style={{
              borderColor:
                touched.password && errors.password
                  ? "var(--color-red)"
                  : touched.password && !errors.password
                  ? "var(--color-green)"
                  : "transparent",
            }}
          />

          {touched.password && errors.password ? (
            <MessageSvg>
              <use href={`${sprite}#error`} />
            </MessageSvg>
          ) : touched.password && !errors.password ? (
            <MessageSvg>
              <use href={`${sprite}#success`} />
            </MessageSvg>
          ) : null}

          {values.password ? (
            <PassSvg onClick={handleClickPassVisible}>
              {passVisible ? <use href={`${sprite}#eye`} /> : <use href={`${sprite}#eye-off`} />}
            </PassSvg>
          ) : null}

          {touched.password && errors.password ? (
            <ErrorMessage>{errors.password}</ErrorMessage>
          ) : (
            touched.password && <SuccessMessage>Password is secure!</SuccessMessage>
          )}
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
