function solution(num, k) {
  const arr = String(num)
    .split("")
    .map((e) => Number(e));
  return arr.includes(k) ? arr.indexOf(k) + 1 : -1;
}
