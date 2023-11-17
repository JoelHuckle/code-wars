function uniTotal(string) {
  return string.split("").reduce((acc, n) => acc + n.charCodeAt(0), 0);
}
