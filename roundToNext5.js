function roundToNext5(n) {
  while (n % 5) {
    ++n;
  }
  return n;
}
