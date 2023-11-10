String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi, (n) =>
    n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()
  );
};
