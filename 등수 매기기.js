function solution(scores) {
  const avgArr = scores.slice().map((e) => (e[0] + e[1]) / 2);
  const sortedArr = avgArr.slice().sort((a, b) => b - a);

  return avgArr.map((e) => sortedArr.indexOf(e) + 1);
}
