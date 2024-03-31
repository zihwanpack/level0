function solution(A, B) {
  let i = 0;

  const arrA = [...A];
  const arrB = [...B];
  while (i < arrA.length) {
    if (arrA.join("") === arrB.join("")) return i;
    let ele = arrA.pop();
    arrA.unshift(ele);
    i++;
  }
  return -1;
}
