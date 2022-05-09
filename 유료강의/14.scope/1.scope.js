//! 코드 블럭: { }, if() { }, for() { }, function() { }
//! 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
}
console.log(a); // 접근 불가능 에러가 뜬다.
const b = 'b';

//! 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
print();
console.log(message); // 접근불가능 에러가 뜬다.

//! 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b); // 당연히 불가능
sum(3, 10);
