import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal/Modal";
import Success from "../Success/Success";

import { addBook } from "../../store/books/booksOperations";
import { selectOwnBooks } from "../../store/books/booksSelectors";

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
import { toast } from "react-toastify";

const AddBookFilter = () => {
  const dispatch = useDispatch();
  const ownBooks = useSelector(selectOwnBooks);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      totalPages: "",
    },
    validationSchema: addBookFilterSchema,
    onSubmit: async ({ title, author, totalPages }, { resetForm }) => {
      try {
        let bookExists = ownBooks.find((item) => item.title === title);

        if (!bookExists) {
          dispatch(addBook({ title, author, totalPages }));
          setIsOpenModal(true);
          resetForm();
          bookExists = false;
        } else toast.warning(`Such book is already in the library!`);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  return (
    <>
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
      {isOpenModal && (
        <Modal width={342} onClose={toggleModal}>
          <Success text="add-book" />
        </Modal>
      )}
    </>
  );
};

export default AddBookFilter;
