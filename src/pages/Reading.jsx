import { useSelector } from "react-redux";

import { selectReadBook } from "../store/books/booksSelectors";
import { getBookStatusAndProgress } from "../helpers/getBookProgress";

import Dashboard from "../components/Dashboard/Dashboard";
import ReadingFilter from "../components/Filters/ReadingFilter";
import Progress from "../components/Dashboard/Progress/Progress";
import Details from "../components/Dashboard/Details/Details";
import MyBook from "../components/MyBook/MyBook";

const Reading = () => {
  const readBook = useSelector(selectReadBook);
  const bookInfo = getBookStatusAndProgress(readBook);

  return (
    <>
      <Dashboard>
        <ReadingFilter />
        {!bookInfo.status && !bookInfo.progress ? <Progress /> : <Details />}
      </Dashboard>
      <MyBook />
    </>
  );
};

export default Reading;
