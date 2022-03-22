export const dateFormatter = (dates, selectedDate) => {
  const day = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDateIndex = dates.indexOf(
    dates.find((el) => el.date === selectedDate.getDate())
  );
  return dates
    .filter(
      (el, index) =>
        (index >= currentDateIndex - 9 && index <= currentDateIndex) ||
        (index <= currentDateIndex + 7 && index >= currentDateIndex)
    )
    .map((date) => ({
      day: day[new Date(date.jsDate).getDay()],
      number: date.date,
    }));
};
