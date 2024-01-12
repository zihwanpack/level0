function solution(my_string) {
  let answer = my_string.split("").reverse().join("");
  // split은 하나씩 배열로 만들기 join은 하나씩 합쳐서 문자열로 만들기
  return answer;
}
