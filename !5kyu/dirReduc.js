function dirReduc(arr) {
  const conflicts = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  let conflict = true;

  while (conflict) {
    conflict = false;

    arr.forEach((n, i) => {
      if (conflicts[arr[i]] == arr[i + 1]) {
        arr.splice(i, 2);
        conflict = true;
      }
    });
  }
  return res;
}
