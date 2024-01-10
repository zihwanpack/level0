function solution(n) {
  let answer = 0;
  const arr = [...String(n)].map(Number);
  arr.forEach((num) => {
    answer += num;
  });

  return answer;
}
