function oddOrEven(array) {
  return array.reduce((a, n) => a + n, 0) % 2 ? "odd" : "even";
}
