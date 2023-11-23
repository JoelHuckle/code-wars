function findMissingLetter(array) {
  return String.fromCharCode(
    array
      .find((n, i) => {
        if (n.charCodeAt(0) !== array[i + 1].charCodeAt(0) - 1) return n;
      })
      .charCodeAt(0) + 1
  );
}
