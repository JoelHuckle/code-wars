function dirReduc(arr) {
  const conflict = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  return arr.reduce((acc, dir) => {
    if (acc[acc.length - 1] === conflict[dir]) {
      acc.pop();
    } else {
      acc.push(dir);
    }
    return acc;
  }, []);
}
