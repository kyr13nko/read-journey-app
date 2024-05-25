import { useDispatch, useSelector } from "react-redux";

import { selectReadBook } from "../../../../store/books/booksSelectors";
import { getReadBookDelete } from "../../../../store/books/booksOperations";

import { convertDate } from "../../../../helpers/convertDate";
import { getPercentage } from "../../../../helpers/getPercentage";
import { getReadingTime } from "../../../../helpers/getReadingTime";
import { getPagesPerHour } from "../../../../helpers/getPagesPerHour";

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
      groupedBooks[date].totalReadPages += item.finishPage - item.startPage + 1;
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
                {books
                  .reverse()
                  .map(({ _id, startPage, finishPage, startReading, finishReading }) => (
                    <ReadItem key={_id}>
                      <PagesLeft>
                        <PagesPercentage>
                          {finishPage
                            ? `${getPercentage(startPage, finishPage + 1, readBook.totalPages)}%`
                            : `Reading...`}
                        </PagesPercentage>
                        {finishPage && (
                          <PagesMinutes>{getReadingTime(startReading, finishReading)}</PagesMinutes>
                        )}
                      </PagesLeft>
                      <PagesRight>
                        <PagesGraph>
                          <ReadSvg>
                            <use href={`${sprite}#block`} />
                          </ReadSvg>
                          <DeleteBtn type="button" onClick={() => handleDelBtnClick(_id)}>
                            <svg>
                              <use href={`${sprite}#trash`} />
                            </svg>
                          </DeleteBtn>
                        </PagesGraph>
                        {finishPage && (
                          <PagesPerHour>
                            {getPagesPerHour(startPage, finishPage, startReading, finishReading)}
                            &#32;pages per hour
                          </PagesPerHour>
                        )}
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
