export const getPagesPerHour = (startPage, finishPage, startReading, finishReading) => {
  const pagesRead = finishPage - startPage;

  const startTime = new Date(startReading);
  const finishTime = new Date(finishReading);

  const timeDifferenceMillis = finishTime - startTime;

  const timeDifferenceSeconds = timeDifferenceMillis / 1000;

  const pagesPerHour = (pagesRead / timeDifferenceSeconds) * 3600;

  return pagesPerHour.toFixed(0);
};
