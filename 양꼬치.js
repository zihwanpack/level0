function solution(n, k) {
  let service = parseInt(n / 10) * 2000;
  let answer = n * 12000 + 2000 * k - service;

  return answer;
}
