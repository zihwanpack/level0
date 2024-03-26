function solution(spell, dic) {
  spell = spell.sort().join("");
  return dic.find((str) => str.split("").sort().join("") === spell) ===
    undefined
    ? 2
    : 1;
}
