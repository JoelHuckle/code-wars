function count(string) {
  let count = {};
  string.split("").forEach((n) => {
    !count[n] ? (count[n] = 1) : (count[n] += 1);
  });
  return count;
}
