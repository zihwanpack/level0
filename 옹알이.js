function solution(babbling) {
  let cnt = 0;
  const ongs = ["aya", "ye", "woo", "ma"];

  babbling.forEach((babble) => {
    for (let ong of ongs) {
      if (babble.includes(ong)) {
        babble = babble.replace(ong, " ");
      }
    }
    if (babble.trim().length === 0) cnt++;
  });
  return cnt;
}
