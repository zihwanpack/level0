function solution(num_list) {
  let answer = [];
  let oddCount = 0,
    evenCount = 0;
  num_list.forEach((element) => {
    if (element % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  });
  answer.push(evenCount);
  answer.push(oddCount);

  return answer;
}
