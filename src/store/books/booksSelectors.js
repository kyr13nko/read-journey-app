export const selectRecommendedBooks = (state) => state.books.recommended;

export const selectOwnBooks = (state) => state.books.own;

export const selectReadBook = (state) => state.books.read;

export const selectCurrentPage = (state) => state.books.currentPage;

export const selectTotalPages = (state) => state.books.totalPages;

export const selectIsLoading = (state) => state.books.isLoading;

export const selectError = (state) => state.books.error;
