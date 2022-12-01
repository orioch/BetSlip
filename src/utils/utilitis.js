// this function get an objects of arrays, and combine it to one array
export const combineArrays = (obj) => {
  let result = [];
  for (const key in obj) {
    result = result.concat(obj[key]);
  }
  return result;
};

// this function "calculate" how much you win from your singles (just for examle... in real life the backend should do this)
export const calculateSinglesWin = (singles) => {
  let value = singles.reduce(
    (currentValue, bet) => bet.value + currentValue,
    0
  );
  return Number(value) * 4;
};
