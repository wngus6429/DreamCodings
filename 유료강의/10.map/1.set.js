//! Set
const set임 = new Set([1, 2, 3]);
console.log(set임); // Set(3) { 1, 2, 3 }

//! 사이즈 확인
console.log('사이즈', set임.size); // 사이즈 3

//! 존재하는지 확인
console.log('존재', set임.has(2)); // true
console.log('존재2', set임.has(6)); // false

//! 순회
console.log('순회시작');
set임.forEach((item) => console.log('아이템', item));
// 1 2 3
for (const value of set임.values()) {
  console.log(value); // 1 2 3
}
console.log('순회끝');

//! 추가
set임.add(6);
console.log(set임); // Set(4) { 1, 2, 3, 6 }
set임.add(6); // 6이 이미 있어서 안들어감
console.log('무시당함', set임);

//! 삭제
set임.delete(6);
console.log(set임); // Set(3) { 1, 2, 3 }

//! 전부 삭제
set임.clear();
console.log(set임); // Set(0) {}

//! 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log('오브젝트세트', objs);
// 오브젝트세트 Set(2) { { name: '🍎', price: 8 },
// { name: '🍌', price: 5 } }

//! 퀴즈, 참조관계 조심
console.log('왓', objs);
// 왓 Set(2) { { name: '🍎', price: 8 },
// { name: '🍌', price: 5 } }
obj1.price = 10;
objs.add(obj1); // 동일한게 있어서 추가가 안됨.
console.log(objs);
// Set(2) { { name: '🍎', price: 10 },
// { name: '🍌', price: 5 } }
console.log('끝');

//! 퀴즈2 참조관계 조심
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
// Set(3) { { name: '🍎', price: 10 },
// { name: '🍌', price: 5 }, { name: '🍌', price: 5 }}
obj3.price = 8;
console.log(objs);
// Set(3) {{ name: '🍎', price: 10 },
// { name: '🍌', price: 5 }, { name: '🍌', price: 8 }}
