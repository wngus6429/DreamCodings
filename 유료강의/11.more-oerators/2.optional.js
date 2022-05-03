//! 옵셔널 체이닝 연산자 Optional Chaining Operator
//! ES11 (ECMAScript 2020)
// ?.
//! null 또는 undefined을 확인할때
//! 한마디로 에러가 나도 프로그램이 멈추지 않게 할수 있다.
let item = { price: 1 };
const price = item?.price; //* item && item.price 를 축약
// 아이템이 있니? 있으면 price정보에 접근 , 없으면 하지마
console.log(price); // 1

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj); // 엘리
