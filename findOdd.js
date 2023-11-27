function findOdd(A) {
  const count = (num) => A.filter((n) => n == num).length;
  for (let i = 0; i < A.length; ++i) {
    if (count(A[i]) % 2 !== 0) return A[i];
  }
}
