//! Set
const set = new Set([1, 2, 3]);
console.log(set);

//! 사이즈 확인
console.log('사이즈', set.size);

//! 존재하는지 확인
console.log('존재', set.has(2));
console.log('존재2', set.has(6));

//! 순회
console.log('순회시작');
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}
console.log('순회끝');

//! 추가
set.add(6);
console.log(set);
set.add(6);
console.log('무시당함', set);

//! 삭제
set.delete(6);
console.log(set);

//! 전부 삭제
set.clear();
console.log(set);

//! 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log('오브젝트세트', objs);

//! 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

console.log('끝');
//! 퀴즈2
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
