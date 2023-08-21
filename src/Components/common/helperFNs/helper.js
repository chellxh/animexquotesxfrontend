const dateFormatter = (date) => {
  let parsedDate = date.replace(/-/g, "/");
  let slicedDate = parsedDate.slice(0, 10);
  return slicedDate;
};

export { dateFormatter };
