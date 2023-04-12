export const formatDate = (dateString: string) => {
  const formatedDate = new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return formatedDate;
};
