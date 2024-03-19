function solution(before, after) {
  const arr1 = before.split("").sort();
  const arr2 = after.split("").sort();
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return 1;
  }
  return 0;
}
