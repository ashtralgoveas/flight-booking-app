export const convertDate = (dateString) => {
  const inputDateTime = new Date(dateString);
  return `${inputDateTime.getDate()}-${(inputDateTime.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${inputDateTime.getFullYear()}`;
};
