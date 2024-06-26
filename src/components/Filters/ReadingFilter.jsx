import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import { toast } from "react-toastify";

import Modal from "../Modal/Modal";
import Success from "../Success/Success";

import { selectReadBook } from "../../store/books/booksSelectors";
import { getReadBookStart, getReadBookFinish } from "../../store/books/booksOperations";

import { getBookStatusAndProgress } from "../../helpers/getBookProgress";
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
  const dispatch = useDispatch();
  const readBook = useSelector(selectReadBook);

  const totalPages = readBook?.totalPages;

  const bookInfo = getBookStatusAndProgress(readBook);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      page: "",
    },
    validationSchema: addPageFilterSchema,
    onSubmit: async ({ page }, { resetForm }) => {
      try {
        if (page > totalPages) {
          return toast.warning("Value is greater than the total number of pages!");
        } else {
          if (+page === totalPages) {
            toggleModal();
          }

          bookInfo.status === "active"
            ? dispatch(getReadBookFinish({ id: readBook._id, page }))
            : dispatch(getReadBookStart({ id: readBook._id, page }));
        }
        resetForm();
      } catch (error) {
        toast.error(error);
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

          <Button type="submit">{bookInfo.status === "active" ? "To Stop" : "To Start"}</Button>
        </Form>
      </FilterWrapper>

      {isOpenModal && (
        <Modal width={342} onClose={toggleModal}>
          <Success text="read-book" />
        </Modal>
      )}
    </>
  );
};

export default ReadingFilter;
