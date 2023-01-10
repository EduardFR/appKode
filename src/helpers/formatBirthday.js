export const formatBirthday = (birthday) => {
  return new Date(birthday).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
