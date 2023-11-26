function reverseAndMirror(s1, s2) {
  const invert = (str) =>
    str
      .split("")
      .reverse()
      .map((n) => (n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
      .join("");
  return `${invert(s2)}@@@${invert(s1)}${invert(s1)
    .split("")
    .reverse()
    .join("")}`;
}
