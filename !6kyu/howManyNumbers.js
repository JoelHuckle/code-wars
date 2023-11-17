function selNumber(n, d) {
  const valid = (num) => {
    let numArr = String(num).split("");

    return (
      numArr.length >= 2 &&
      numArr.sort((a, b) => Number(a) - Number(b)).join("") == num &&
      numArr.every((n, i, arr) =>
        Number(arr[i + 1]) ? Number(arr[i + 1]) - Number(n) <= d : true
      ) &&
      new Set(numArr).size == numArr.length
    );
  };

  let count = 0,
    nums = [];

  for (let i = 12; i < n; ++i) {
    if (valid(i)) {
      count++;
      nums.push(i);
    }
  }

  return count;
}
