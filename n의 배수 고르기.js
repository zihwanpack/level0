function solution(n, numlist) {
  let answer = numlist.filter((e) => e % n === 0);
  return answer;
}
