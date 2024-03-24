function solution(sides) {
  let minLen = Math.min(...sides);
  let result = minLen * 2 - 1;

  return result;
}
