function solution(my_string) {
  if (my_string.match(/\d+/g) === null) return 0;
  const sum = my_string
    .match(/\d+/g)
    .map((e) => Number(e))
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);

  return sum;
}
