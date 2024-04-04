function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
  const lcmValue = lcm(denom1, denom2);
  const sumNumer = numer1 * (lcmValue / denom1) + numer2 * (lcmValue / denom2);
  const divisor = gcd(sumNumer, lcmValue);
  return [sumNumer / divisor, lcmValue / divisor];
}
