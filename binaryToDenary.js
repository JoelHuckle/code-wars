const binaryArrayToNumber = (arr) => {
  let result = 0;
  arr.forEach((n, i) => {
    if (n === 1) {
      result += Math.pow(2, arr.length - (i + 1));
    }
  });
  return result;
};
