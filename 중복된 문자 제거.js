function solution(my_string) {
  const uniqueString = [...new Set(my_string)].join("");
  return uniqueString;
}
