function solution(array) {
  const count = {};

  array.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  let maxCount = 0;
  let mode = 0;
  let isOnly = true;

  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      mode = key;
      isOnly = true;
    } else if (count[key] === maxCount) {
      isOnly = false;
    }
  }
  if (!isOnly) {
    return -1;
  } else {
    return Number(mode);
  }
}
