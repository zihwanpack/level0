function solution(rsp) {
  let answer = "";
  for (let char of rsp) {
    if (char === "2") {
      answer += "0";
    } else if (char === "0") {
      answer += "5";
    } else {
      answer += "2";
    }
  }

  return answer;
}
