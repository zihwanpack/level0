function solution(cipher, code) {
  let answer = [...cipher].filter((e, i) => (i + 1) % code === 0).join("");
  return answer;
}
