function solution(dots) {
  var answer = 0;
  function calculation(a, b, c, d) {
    let gapAB, gapCD;
    gapAB = (b[1] - a[1]) / (b[0] - a[0]);
    gapCD = (d[1] - c[1]) / (d[0] - c[0]);
    gapAB === gapCD ? (answer = 1) : "";
  }
  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);
  return answer;
}
