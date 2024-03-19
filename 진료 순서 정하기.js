function solution(emergency) {
  const sortedArr = [...emergency].sort((a, b) => b - a);
  return emergency.map((e) => sortedArr.indexOf(e) + 1);
}
