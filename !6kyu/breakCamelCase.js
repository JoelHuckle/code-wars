function solution(string) {
  return string.replace(/([A-Z])/g, (p1) => ` ${p1}`);
}
