function comb(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  return Math.round(comb(balls) / (comb(balls - share) * comb(share)));
}
