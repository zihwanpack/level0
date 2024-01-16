function solution(rsp) {
  var answer = [];
  for (const char of rsp) {
    if (char === char.toUpperCase()) {
      answer.push(char.toLowerCase());
    } else {
      answer.push(char.toUpperCase());
    }
  }
  return answer.join("");
}
