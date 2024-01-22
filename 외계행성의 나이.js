function solution(age) {
  let alphabet = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + 97)
  );
  return age
    .toString()
    .split("")
    .map((e) => alphabet[e])
    .join("");
}
