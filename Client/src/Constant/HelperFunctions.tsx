export const filterCondition = (item: any, search: string) => {
  if (item.title.toLowerCase().includes(search.toLowerCase())) return true;
};
