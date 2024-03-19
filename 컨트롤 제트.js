function solution(s) {
  const arr = s.split(" ");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      result -= parseInt(arr[i - 1]);
    } else {
      result += parseInt(arr[i]);
    }
  }
  return result;
}

// function solution(s) {
//   const stack = []

//   s.split(' ').forEach((target) => {
//       if(target === 'Z') stack.pop();
//       else stack.push(+target)
//   })

//   return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// }
