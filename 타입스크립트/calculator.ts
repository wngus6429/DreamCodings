/**
 * Let's make a calculator 🧮
 */
function calculate(what: string, num1: number, num2: number): number {
  if (what === "add") {
    return num1 + num2;
  } else if (what === "substract") {
    return num1 - num2;
  } else if (what === "multiply") {
    return num1 * num2;
  } else if (what === "divide") {
    return num1 / num2;
  } else {
    return num1 % num2;
  }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
//! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate2(what: Command, num1: number, num2: number): number {
  switch (what) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw new Error("unkonwn command");
  }
}
console.log(calculate2("add", 1, 3)); // 4
console.log(calculate2("substract", 3, 1)); // 2
console.log(calculate2("multiply", 4, 2)); // 8
console.log(calculate2("divide", 4, 2)); // 2
console.log(calculate2("remainder", 5, 2)); // 1

//* 2023/06/17 복습
//* 2024/04/14 복습
