var findAverage = function (nums) {
  return nums.reduce((acc, n) => acc + n, 0) / nums.length;
};
