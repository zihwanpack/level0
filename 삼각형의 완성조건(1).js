function solution(sides) {
  sides.sort((a, b) => a - b);
  let answer = sides[2] < sides[0] + sides[1] ? 1 : 2;
  return answer;
}
