function solution(my_string) {
  let arr = [...my_string];
  let vowels = ["a", "e", "i", "o", "u"];

  arr = arr.filter((element) => !vowels.includes(element));

  return arr.join("");
}
