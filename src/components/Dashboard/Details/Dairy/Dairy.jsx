import { useDispatch, useSelector } from "react-redux";

import { selectReadBook } from "../../../../store/books/booksSelectors";
import { getReadBookDelete } from "../../../../store/books/booksOperations";

import sprite from "../../../../assets/images/sprite.svg";
import {
  DairyWrapper,
  DateText,
  DateContent,
  DeleteBtn,
  List,
  Marker,
  ReadList,
  TotalPages,
  ReadItem,
  ReadSvg,
  PagesPerHour,
  PagesGraph,
  PagesRight,
  PagesLeft,
  PagesPercentage,
  PagesMinutes,
  PagesTotal,
} from "./Dairy.styled";
import { convertDate } from "../../../../helpers/convertDate";

const Dairy = () => {
  const dispatch = useDispatch();
  const readBook = useSelector(selectReadBook);

  const groupBooksByDate = () => {
    return readBook?.progress.reduce((groupedBooks, item) => {
      const date = new Date(item.startReading).toDateString();

      if (!groupedBooks[date]) {
        groupedBooks[date] = {
          books: [],
          totalReadPages: 0,
        };
      }

      groupedBooks[date].books.push(item);
      groupedBooks[date].totalReadPages += item.finishPage - item.startPage;
      return groupedBooks;
    }, {});
  };

  const handleDelBtnClick = (id) => {
    dispatch(getReadBookDelete({ bookId: readBook._id, readingId: id }));
  };

  return (
    <DairyWrapper>
      <List>
        {Object.entries(groupBooksByDate())
          .reverse()
          .map(([date, { books, totalReadPages }], index) => (
            <DateContent key={date}>
              <PagesTotal>
                <Marker $isLastDate={index === 0} />
                <DateText $isLastDate={index === 0}>{convertDate(date)}</DateText>
                <TotalPages>{totalReadPages ? `${totalReadPages} pages` : `Reading...`}</TotalPages>
              </PagesTotal>
              <ReadList>
                {books.map((item) => (
                  <ReadItem key={item._id}>
                    <PagesLeft>
                      <PagesPercentage>%</PagesPercentage>
                      <PagesMinutes>minutes</PagesMinutes>
                    </PagesLeft>
                    <PagesRight>
                      <PagesGraph>
                        <ReadSvg>
                          <use href={`${sprite}#block`} />
                        </ReadSvg>
                        <DeleteBtn type="button" onClick={() => handleDelBtnClick(item._id)}>
                          <svg>
                            <use href={`${sprite}#trash`} />
                          </svg>
                        </DeleteBtn>
                      </PagesGraph>
                      <PagesPerHour>pages per hour</PagesPerHour>
                    </PagesRight>
                  </ReadItem>
                ))}
              </ReadList>
            </DateContent>
          ))}
      </List>
    </DairyWrapper>
  );
};

export default Dairy;
