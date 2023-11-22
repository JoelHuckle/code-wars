function countSel(lst) {
  const occur = (num) => {
    let count = 0;
    lst.forEach((n) => {
      if (n === num) count++;
    });
    return count;
  };

  let largest = 0;
  lst.forEach((n) => {
    if (occur(n) > largest) largest = occur(n);
  });

  return [
    lst.length,
    new Set(lst).size,
    [...lst].filter((n) => occur(n) == 1).length,
    [
      Array.from(new Set([...lst].filter((n) => occur(n) == largest))).sort(
        (a, b) => a - b
      ),
      largest,
    ],
  ];
}
