function solution(board) {
  let answer = board.length * board.length;
  const danger = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  const dangerZone = Array(board.length);
  for (let i = 0; i < board.length; i++) {
    dangerZone[i] = Array(board.length).fill(false);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        dangerZone[i][j] = true;

        for (let k = 0; k < danger.length; k++) {
          const dx = danger[k][0];
          const dy = danger[k][1];
          const realDX = i + dx;
          const realDY = j + dy;
          if (
            realDX >= 0 &&
            realDX < board.length &&
            realDY >= 0 &&
            realDY < board.length
          ) {
            dangerZone[realDX][realDY] = true;
          }
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (dangerZone[i][j] === true) {
        answer--;
      }
    }
  }

  return answer;
}
