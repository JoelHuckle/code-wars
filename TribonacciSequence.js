function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; ++i) {
    const last3 = signature.slice(signature.length - 3, signature.length);
    signature.push(last3.reduce((acc, n) => acc + n, 0));
  }
  return signature.slice(0, n);
}
