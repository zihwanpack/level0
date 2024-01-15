function solution(s1, s2) {
  const Arr = s1.filter((element) => s2.includes(element));
  return Arr.length;
}
