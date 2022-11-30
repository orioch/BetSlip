// this function get an objects of arrays, and combine it to one array
export const combineArrays = (obj) => {
  let result = [];
  for (const key in obj) {
    result = result.concat(obj[key]);
  }
  return result;
};
