function positiveSum(arr) {
  return arr.reduce((acc, n) => {
    if (n > 0) acc += n;
    return acc;
  }, 0);
}
