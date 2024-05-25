export const getReadingTime = (startReading, finishReading) => {
  const startTime = new Date(startReading);
  const finishTime = new Date(finishReading);

  const timeDifference = finishTime - startTime;

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const result = hours > 0 ? `${hours} hours ${minutes} minutes` : `${minutes} minutes`;

  return result;
};
