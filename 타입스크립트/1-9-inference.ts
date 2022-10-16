/**
 *! Type Inference
 */
let text = 'hello';
// 문자열 넣었는데 숫자 넣을려 하면 에러남 text = 1; 
function print(message = 'hellooo') {
  console.log(message);
}
print('hello');
print(1); //! 에러남

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
