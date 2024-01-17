function solution(box, n) {
  return box
    .map((e) => Math.floor(e / n))
    .reduce((acc, current) => acc * current, 1);
}
