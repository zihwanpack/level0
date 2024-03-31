function solution(numlist, n) {
  const result = [...numlist].sort((a, b) => {
    const [absA, absB] = [Math.abs(a - n), Math.abs(b - n)];
    if (absA === absB) return b - a;
    return absA - absB;
  });
  return result;
}
