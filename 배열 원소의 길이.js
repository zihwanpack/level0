function solution(strlist) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < strlist.length; i++) {
    count = 0;
    for (let j = 0; j < strlist[i].length; j++) {
      count++;
    }
    answer.push(count);
  }
  return answer;
}
