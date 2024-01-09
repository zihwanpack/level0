function solution(array) {
  array.sort((a, b) => {
    return a - b; // 숫자 오름차순으로 정렬하는 법
  });
  let answer = array[Math.floor(array.length / 2)];
  return answer;
}
