function oddOrEven(array) {
  return array.reduce((a, n) => a + n, 0) % 2 === 0 ? "even" : "odd";
}
