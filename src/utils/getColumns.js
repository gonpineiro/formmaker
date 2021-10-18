import { capitalizeFirstLetter } from ".";

const getColumns = (data) => {
  if (!data) {
    return [];
  }
  const columns = [];

  const keys = Object.keys(data);

  keys.forEach((key) => {
    columns.push({
      name: capitalizeFirstLetter(key),
      sortable: true,
      selector: (row) => row[key],
    });
  });

  return columns;
};

export default getColumns;
