import { useFormik } from "formik";

import { recommendedFilterSchema } from "../../helpers/schemas";

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

const RecommendedFilter = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
    },
    validationSchema: recommendedFilterSchema,
    onSubmit: async (values, { resetForm }) => {
      const { title, author } = values;
      console.log("title", title);
      console.log("author", author);
      try {
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });
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

        <Button type="submit">To apply</Button>
      </Form>
    </FilterWrapper>
  );
};

export default RecommendedFilter;
