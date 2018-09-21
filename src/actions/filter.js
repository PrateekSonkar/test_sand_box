//SET_TEXT_FILTER
//SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});
//SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});
