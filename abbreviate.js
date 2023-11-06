function abbreviate(string) {
  //finds all words, only allows characters
  let find = /[a-z]{4,}/gi;
  //abbreviates word
  const abb = (str) => str[0] + (str.length - 2) + str[str.length - 1];
  //abbreviates all instances found to match regex
  return string.replace(find, abb);
}
