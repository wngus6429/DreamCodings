//!  논리연산자 Logical Operator
//!  && 그리고
//!  || 또는
//!  단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('둘다 true!');
}
// let result1 = false && obj2; //! 결과 false
let result1 = obj1 && obj2; //! 중요함, 뒤에꺼 할당
console.log('리절트1', result1);

let result2 = obj1 || obj2; //! 중요함, true인게 할당
console.log('리절트2', result2);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

//! 활용예
//! 조건이 truthy일때 && 무언가를 해야 할 경우
//! 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}
//! 앞이 false라서 뒤가 실행이 안됨
obj1.owner && changeOwner(obj1);
//! 앞이 true 라면 뒤가 실행이 되어서 Owner생김
obj2.owner && changeOwner(obj2);
console.log('obj1', obj1);
console.log('obj2', obj2);
//! 앞이 false라서 뒤 실행
obj1.owner || makeNewOwner(obj1);
//! 앞이 true라서 뒤가 실행이 안되었음.
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

//! null 또는 undefined인 경우를 확인할때
// let item;;
// const price = item.price;
// console.log(price); //! 이렇게 하면 죽는다
let item = { price: 1 }; //! 죽지 않게 하기 위해 이렇게
//! item이 true라면 뒤가 실행되서 할당
const price = item && item.price;
console.log(price);

//!  기본값을 설정
//!  default parameter는 null과 undefined인 경우
//!  || falshy한 경우 설정(할당) 0, -0, null, undefined, ''
function print(message = 'Hi') {
  const text = message || 'Hello';
  console.log(text);
}
print('안녕!');
print();
print('');
