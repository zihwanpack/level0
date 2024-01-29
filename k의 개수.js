function solution(i, j, k) {
  let cnt = 0;
  for (let e = i; e <= j; e++) {
    cnt += e.toString().split(k.toString()).length - 1;
  }
  return cnt;
}
