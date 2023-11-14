function sumDigPow(a, b) {
  const isPow = (x) => {
    return (
      x ===
      String(x)
        .split("")
        .reduce((acc, n, i) => acc + Math.pow(Number(n), i + 1), 0)
    );
  };

  let powArr = [];
  for (let i = a; i <= b; ++i) {
    if (isPow(i)) {
      powArr.push(i);
    }
  }

  return powArr;
}
