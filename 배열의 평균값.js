function solution(numbers) {
  let answer = 0;
  let sum = 0;
  let numLength = numbers.length;
  for (let i = 0; i < numLength; i++) {
    sum += numbers[i];
  }

  answer = sum / numLength;

  return answer;
}
