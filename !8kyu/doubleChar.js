function doubleChar(str) {
  return str
    .split("")
    .map((n) => n.repeat(2))
    .join("");
}
