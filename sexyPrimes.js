function sexy_prime(x, y) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  if (isPrime(x) && isPrime(y)) {
    if (Math.max(x, y) - Math.min(x, y) == 6) return true;
  }

  return false;
}
