function solution(array, n) {
  array = array.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(Math.abs(array[i] - n));
  }
  return array[arr.indexOf(Math.min(...arr))];
}
