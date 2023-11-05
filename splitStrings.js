function solution(str) {
  //add underscore if odd ending
  //split into groups of 2
  //or return empty array
  return (str + "_").match(/.{2}/g) || [];
}
