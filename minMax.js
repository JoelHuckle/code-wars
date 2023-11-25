function minMax(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return [sorted[0], sorted[arr.length - 1]];
}
