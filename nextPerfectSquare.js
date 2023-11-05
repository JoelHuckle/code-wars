function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  return !Number.isInteger(sqrt) ? -1 : (sqrt + 1) * (sqrt + 1);
}
