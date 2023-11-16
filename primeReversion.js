function solve(a, b) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let primes = [];

  for (let i = a; i < b; ++i) {
    if (isPrime(i)) primes.push(i);
  }

  const prod = (n1, n2) =>
    String(n1 * n2)
      .split("")
      .reduce((acc, n) => acc + Number(n), 0);

  let count = 0;

  primes.forEach((n, index) => {
    for (let i = index; i < primes.length; ++i) {
      if (isPrime(prod(n, primes[i]))) count++;
    }
  });

  return count;
}
