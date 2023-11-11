function toWeirdCase(string) {
  return string
    .split(" ")
    .map((n) => {
      return n
        .split("")
        .map((j, i) => {
          return i % 2 ? j : j.toUpperCase();
        })
        .join("");
    })
    .join(" ");
}
