function solution(id_pw, db) {
  for (let e of db) {
    if (id_pw[0] === e[0]) {
      if (id_pw[1] === e[1]) {
        return "login";
      } else {
        return "wrong pw";
      }
    }
  }
  return "fail";
}
