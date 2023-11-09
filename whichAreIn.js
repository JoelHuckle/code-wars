function inArray(array1, array2) {
  let sub = [];

  array1.forEach((n) => {
    array2.forEach((j) => {
      if (j.includes(n)) {
        if (!sub.includes(n)) {
          sub.push(n);
        }
      }
    });
  });

  return sub.sort();
}
