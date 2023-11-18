function titleCase(title, minorWords) {
  if (!title) return "";

  const minors = minorWords
    ? minorWords.split(" ").map((n) => n.toLowerCase())
    : [];
  const titleWord = (str) => str.replace(/(^.)/, (p1) => p1.toUpperCase());

  let returnStr = title
    .toLowerCase()
    .split(" ")
    .map((n, i) => {
      return minors.includes(n) && i > 0 ? n : titleWord(n);
    })
    .join(" ");

  return returnStr;
}
