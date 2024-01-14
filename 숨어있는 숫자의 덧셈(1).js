function solution(my_string) {
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    let element = parseInt(my_string[i]);

    if (!isNaN(element)) {
      answer += element;
    }
  }

  return answer;
}
