function solution(n) {
  let p = 1;
  for (let i = 1; i <= 11; i++) {
    p *= i;
    if (p > n) {
      return i - 1;
    }
  }
}
