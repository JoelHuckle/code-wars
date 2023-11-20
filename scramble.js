function scramble(str, arr) {
  let res = [],
    obj = {};
  arr.forEach((n, i) => (obj[n] = str[i]));
  for (let i in obj) res.push(obj[i]);
  return res.join("");
}
