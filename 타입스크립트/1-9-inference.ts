/**
 *! Type Inference
 */
let text = 'hello';
// 문자열 넣었는데 숫자 넣을려 하면 에러남 text = 1; 
function printand(message = 'hellooo') {
  console.log(message);
}
printand('hello');
printand(1); //! 에러남

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
console.log(result);

// 20230617 복습