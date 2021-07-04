export const containText = (source, target) => {
  if (isEmptyText(source) || isEmptyText(target)) {
    return 0;
  }
  return target.toLowerCase().indexOf(source.toLowerCase()) > -1;
};

export const filterText = (text, dataList) => {
  if (isEmptyText(text)) {
    return dataList;
  }
  return dataList.filter((target) => containText(text, target));
};

export const isEmptyText = (value) => {
  return (
    value === "" || value === undefined || value.replace(/\s+/g, "") === ""
  );
};
