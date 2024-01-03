function flattenAndSort(array) {
    return array.reduce((acc, n) => acc.concat(n), []).sort((a, b) => a-b);
  }