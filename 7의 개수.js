function solution(array) {
  const copy = [...array].join("").split("7");
  return copy.length - 1;
}
