import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import { registerSchema } from "../../helpers/schemas";
import { register } from "../../store/auth/authOperations";

import sprite from "../../assets/images/sprite.svg";
import {
  Button,
  ButtonWrapper,
  Error,
  Form,
  Input,
  InputWrapper,
  Label,
  MessageSvg,
  PassSvg,
  StyledLink,
  Success,
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
            <Error>{errors.name}</Error>
          ) : (
            touched.name && <Success>Name is correct!</Success>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label>Mail:</Label>
          <Input
            id="email"
            type="email"
            name="email"
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
            <Error>{errors.email}</Error>
          ) : (
            touched.email && <Success>Email is correct!</Success>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label>Password:</Label>
          <Input
            id="password"
            type={passVisible ? "text" : "password"}
            name="password"
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
            <Error>{errors.password}</Error>
          ) : (
            touched.password && <Success>Password is secure!</Success>
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
