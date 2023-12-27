function solution(numbers) {
  let answer = 0;
  let firstLargest, secondLargest, idx;

  firstLargest = Math.max.apply(null, numbers); // 배열에 max메서드 적용하기
  idx = numbers.indexOf(firstLargest);
  numbers.splice(idx, 1); // 가장 큰값 삭제
  secondLargest = Math.max.apply(null, numbers);

  answer = firstLargest * secondLargest;

  return answer;
}
