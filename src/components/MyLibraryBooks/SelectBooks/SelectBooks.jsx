import { useDispatch } from "react-redux";
import Select from "react-select";

import { getOwnBooks } from "../../../store/books/booksOperations";

import { customStyles } from "./SelectBooks.styled";
import { SortWrapper } from "../../../styles/GlobalStyles";

const SelectBooks = () => {
  const dispatch = useDispatch();

  const options = [
    { value: "unread", label: "Unread" },
    { value: "in-progress", label: "In progress" },
    { value: "done", label: "Done" },
    { value: "all", label: "All Books" },
  ];

  const handleChange = ({ value }) => {
    dispatch(getOwnBooks(value));
  };

  return (
    <SortWrapper>
      <Select
        defaultValue={{ value: "all", label: "All Books" }}
        onChange={handleChange}
        options={options}
        isSearchable={false}
        styles={customStyles}
      />
    </SortWrapper>
  );
};

export default SelectBooks;
