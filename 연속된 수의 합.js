function solution(num, total) {
  const start = Math.ceil(total / num - (num - 1) / 2);
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(start + i);
  }

  return arr;
}
