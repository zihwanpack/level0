function calculate(exam) {
  if (exam.includes("-")) {
    let value = Number(exam[0]) - Number(exam[2]);
    if (value !== Number(exam[4])) {
      return "X";
    }
    return "O";
  } else if (exam.includes("+")) {
    let value = Number(exam[0]) + Number(exam[2]);
    if (value !== Number(exam[4])) {
      return "X";
    }
    return "O";
  }
}

function solution(quiz) {
  const result = [];
  quiz.forEach((exam) => {
    result.push(calculate(exam.split(" ")));
  });
  return result;
}
