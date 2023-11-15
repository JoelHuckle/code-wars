function gap(g, m, n) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  let prevPrime;

  for (let i = m; i < n; ++i) {
    if (isPrime(i)) {
      if (i - prevPrime === g) {
        return [prevPrime, i];
      }
      prevPrime = i;
    }
  }

  return null;
}
