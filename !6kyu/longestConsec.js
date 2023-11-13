function longestConsec(strarr, k) {
  if (k > strarr.length || k <= 0) {
    return "";
  }

  let longest = "";
  for (let i = 0; i <= strarr.length - k; ++i) {
    const curr = strarr.slice(i, i + k).join("");
    if (curr.length > longest.length) {
      longest = curr;
    }
  }

  return longest;
}
