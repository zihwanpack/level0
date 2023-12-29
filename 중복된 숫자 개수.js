function solution(array, n) {
  let answer = 0;

  array.forEach((element, index) => {
    if (array[index] === n) {
      answer++;
    }
  });

  return answer;
}
