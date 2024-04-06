function solution(lines) {
  let line = new Array(200).fill(0);
  lines.forEach(([min, max]) => {
    for (; min < max; min++) {
      line[min + 100]++;
    }
  });
  return line.filter((value) => value > 1).length;
}
