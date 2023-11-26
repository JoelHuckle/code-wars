function highestRank(arr) {
  const count = (num) => arr.filter((n) => n === num).length;

  let largestVal = 0,
    largest = [];

  arr.forEach((n) => {
    if (count(n) > largestVal) {
      largestVal = count(n);
      largest = [n];
    } else if (count(n) == largestVal) {
      largest.push(n);
    }
  });
  return Math.max(...largest);
}
