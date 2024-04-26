// import { useState } from "react";
// import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { addPageFilterSchema } from "../../helpers/schemas";

import sprite from "../../assets/images/sprite.svg";
import {
  Button,
  FilterWrapper,
  Form,
  Input,
  InputWrapper,
  Label,
  Title,
  Wrapper,
} from "./Filters.styled";
import { ErrorMessage, MessageSvg, SuccessMessage } from "../../styles/GlobalStyles";

const ReadingFilter = () => {
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      page: 0,
    },
    validationSchema: addPageFilterSchema,
    onSubmit: async ({ page }, { resetForm }) => {
      try {
        console.log("page", page);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <>
      <FilterWrapper>
        <Title>Start page:</Title>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <InputWrapper>
              <Label>Page number:</Label>
              <Input
                id="page"
                type="text"
                placeholder="0"
                name="page"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.page}
                style={{
                  borderColor:
                    touched.page && errors.page
                      ? "var(--color-red)"
                      : touched.page && !errors.page
                      ? "var(--color-green)"
                      : "transparent",
                }}
              />

              {touched.page && errors.page ? (
                <MessageSvg>
                  <use href={`${sprite}#error`} />
                </MessageSvg>
              ) : touched.page && !errors.page ? (
                <MessageSvg>
                  <use href={`${sprite}#success`} />
                </MessageSvg>
              ) : null}

              {touched.title && errors.title ? (
                <ErrorMessage>{errors.title}</ErrorMessage>
              ) : (
                touched.title && <SuccessMessage>Page is correct!</SuccessMessage>
              )}
            </InputWrapper>
          </Wrapper>

          <Button type="submit">To Start</Button>
        </Form>
      </FilterWrapper>
    </>
  );
};

export default ReadingFilter;
