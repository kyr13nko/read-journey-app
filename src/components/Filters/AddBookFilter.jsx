import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Modal/Modal";
import Success from "../Success/Success";

import { addBook } from "../../store/books/booksOperations";
import { selectOwnBooks } from "../../store/books/booksSelectors";

import { useFormik } from "formik";
import { addBookFilterSchema } from "../../helpers/schemas";

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
import { toast } from "react-toastify";
import { ErrorMessage, MessageSvg, SuccessMessage } from "../../styles/GlobalStyles";

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
        let bookExists = ownBooks.find((book) => book.title === title);

        if (!bookExists) {
          dispatch(addBook({ title, author, totalPages }));
          setIsOpenModal(true);
          resetForm();
          bookExists = false;
        } else toast.warning(`Such book is already in the library!`);
      } catch (error) {
        toast.error(error);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

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
                style={{
                  borderColor:
                    touched.title && errors.title
                      ? "var(--color-red)"
                      : touched.title && !errors.title
                      ? "var(--color-green)"
                      : "transparent",
                }}
              />

              {touched.title && errors.title ? (
                <MessageSvg>
                  <use href={`${sprite}#error`} />
                </MessageSvg>
              ) : touched.title && !errors.title ? (
                <MessageSvg>
                  <use href={`${sprite}#success`} />
                </MessageSvg>
              ) : null}

              {touched.title && errors.title ? (
                <ErrorMessage>{errors.title}</ErrorMessage>
              ) : (
                touched.title && <SuccessMessage>Title is correct!</SuccessMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Label>The author:</Label>
              <Input
                id="author"
                type="text"
                placeholder="Enter text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                style={{
                  borderColor:
                    touched.author && errors.author
                      ? "var(--color-red)"
                      : touched.author && !errors.author
                      ? "var(--color-green)"
                      : "transparent",
                }}
              />

              {touched.author && errors.author ? (
                <MessageSvg>
                  <use href={`${sprite}#error`} />
                </MessageSvg>
              ) : touched.author && !errors.author ? (
                <MessageSvg>
                  <use href={`${sprite}#success`} />
                </MessageSvg>
              ) : null}

              {touched.author && errors.author ? (
                <ErrorMessage>{errors.author}</ErrorMessage>
              ) : (
                touched.author && <SuccessMessage>Author is correct!</SuccessMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <Label>Number of pages:</Label>
              <Input
                id="totalPages"
                type="text"
                placeholder="Enter value"
                name="totalPages"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.totalPages}
                style={{
                  borderColor:
                    touched.totalPages && errors.totalPages
                      ? "var(--color-red)"
                      : touched.totalPages && !errors.totalPages
                      ? "var(--color-green)"
                      : "transparent",
                }}
              />

              {touched.totalPages && errors.totalPages ? (
                <MessageSvg>
                  <use href={`${sprite}#error`} />
                </MessageSvg>
              ) : touched.totalPages && !errors.totalPages ? (
                <MessageSvg>
                  <use href={`${sprite}#success`} />
                </MessageSvg>
              ) : null}

              {touched.totalPages && errors.totalPages ? (
                <ErrorMessage>{errors.totalPages}</ErrorMessage>
              ) : (
                touched.totalPages && <SuccessMessage>Pages is correct!</SuccessMessage>
              )}
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
