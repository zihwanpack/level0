function solution(numbers) {
  let str = "";
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    str += numbers[i];
    switch (str) {
      case "zero":
        result += "0";
        str = "";
        break;
      case "one":
        result += "1";
        str = "";
        break;
      case "two":
        result += "2";
        str = "";
        break;
      case "three":
        result += "3";
        str = "";
        break;
      case "four":
        result += "4";
        str = "";
        break;
      case "five":
        result += "5";
        str = "";
        break;
      case "six":
        result += "6";
        str = "";
        break;
      case "seven":
        result += "7";
        str = "";
        break;
      case "eight":
        result += "8";
        str = "";
        break;
      case "nine":
        result += "9";
        str = "";
        break;
    }
  }
  return Number(result);
}

function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}
