function wave(str) {
  let result = [],
    i;
  for (i = 0; i < str.length; ++i) {
    const strArr = str.split("");
    if (/\w/.test(strArr[i])) {
      strArr.splice(i, 1, strArr[i].toUpperCase());
      result.push(strArr.join(""));
    }
  }
  return result;
}
