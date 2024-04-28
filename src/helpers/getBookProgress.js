export const getBookStatusAndProgress = (book) => {
  let status;
  let progress;

  if (book.progress) {
    const lastItem = book.progress.length > 0 && book.progress[book.progress.length - 1];
    status = lastItem ? lastItem.status : null;

    progress =
      book.progress.length > 0 && book.progress[0].finishPage !== undefined
        ? book.progress[0].finishPage
        : false;
  }

  return { status, progress };
};
