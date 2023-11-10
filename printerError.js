function printerError(s) {
  let errCount = s.length - s.match(/[a-m]/gi).length;
  return `${errCount}/${s.length}`;
}
