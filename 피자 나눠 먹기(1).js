function solution(n) {
  let answer;
  for (let i = 0; i < 16; i++) {
    if (parseInt((7 * i) / n) > 0) {
      answer = i;
      break;
    }
  }

  return answer;
}
