function solution(s) {
  let answer = [];
  const arr = s.split("");
  for (let e of arr) {
    if (arr.indexOf(e) === arr.lastIndexOf(e)) {
      answer.push(e);
    }
  }
  return answer.sort().join("");
}
