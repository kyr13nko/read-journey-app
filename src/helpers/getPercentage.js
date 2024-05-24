export const getPercentage = (startPage, finishPage, totalPages) => {
  const percentage = ((finishPage - startPage) / totalPages) * 100;
  return percentage.toFixed(1);
};
