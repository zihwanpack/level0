function solution(keyinput, board) {
  let result = [0, 0];
  keyinput.forEach((e) => {
    if (e === "up" && result[1] + 1 <= Math.floor(board[1] / 2)) result[1]++;
    else if (e === "down" && result[1] - 1 >= -1 * Math.floor(board[1] / 2))
      result[1]--;
    else if (e === "left" && result[0] - 1 >= -1 * Math.floor(board[0] / 2))
      result[0]--;
    else if (e === "right" && result[0] + 1 <= Math.floor(board[0] / 2))
      result[0]++;
  });
  return result;
}
