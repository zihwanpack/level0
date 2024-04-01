function solution(polynomial) {
  const arr = polynomial.split(" + ");

  const xCoe = arr
    .filter((e) => e.includes("x"))
    .map((e) => e.replace("x", "") || "1")
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  const num = arr
    .filter((e) => !isNaN(e))
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  const result = [];

  if (xCoe) result.push(`${xCoe === 1 ? "" : xCoe}x`);
  if (num) result.push(num);

  return result.join(" + ");
}
