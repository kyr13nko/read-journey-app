import { useDispatch } from "react-redux";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { getRecommendedBooks } from "../../store/books/booksOperations";
import { getLimit } from "../../helpers/getLimit";

import { recommendedFilterSchema } from "../../helpers/schemas";

import {
  Button,
  ButtonWrapper,
  FilterWrapper,
  Form,
  Input,
  InputWrapper,
  Label,
  Title,
  Wrapper,
} from "./Filters.styled";

const RecommendedFilter = () => {
  const dispatch = useDispatch();
  const [filterReset, setFilterReset] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ maxWidth: 1439 });

  const limit = getLimit(mobile, tablet);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
    },
    validationSchema: recommendedFilterSchema,
    onSubmit: async ({ title, author }, { resetForm }) => {
      try {
        if (title || author) {
          dispatch(getRecommendedBooks({ title, author }));

          setFilterReset(true);
          resetForm();
        } else toast.warning("Please, choose search params!");
      } catch (error) {
        toast.error(error);
      }
    },
  });

  const resetFilter = () => {
    dispatch(getRecommendedBooks({ limit }));
    setFilterReset(false);
  };

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  return (
    <FilterWrapper>
      <Title>Filters:</Title>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <InputWrapper>
            <Label>Book title:</Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>The author:</Label>
            <Input
              id="author"
              type="text"
              placeholder="Enter text"
              name="author"
              onChange={handleChange}
              value={values.author}
            />
          </InputWrapper>
        </Wrapper>

        <ButtonWrapper>
          <Button type="submit">To apply</Button>
          {filterReset && (
            <Button type="button" onClick={resetFilter}>
              Reset
            </Button>
          )}
        </ButtonWrapper>
      </Form>
    </FilterWrapper>
  );
};

export default RecommendedFilter;
