import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { addBookFilterSchema } from "../../helpers/schemas";

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

const AddBookFilter = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      totalPages: "",
    },
    validationSchema: addBookFilterSchema,
    onSubmit: async ({ title, author, totalPages }, { resetForm }) => {
      console.log("onSubmit: ---> totalPages:", totalPages);
      console.log("onSubmit: ---> author:", author);
      console.log("onSubmit: ---> title:", title);

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
          <InputWrapper>
            <Label>Number of pages:</Label>
            <Input
              id="totalPages"
              type="text"
              placeholder="Enter value"
              name="totalPages"
              onChange={handleChange}
              value={values.totalPages}
            />
          </InputWrapper>
        </Wrapper>

        <Button type="submit">Add Book</Button>
      </Form>
    </FilterWrapper>
  );
};

export default AddBookFilter;
