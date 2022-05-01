//! Symbol 심벌
//! 유일한 키를 생성할 수 있음 🔑
//! 문자열이 똑같아도 유니크한 심볼을 만들수 있다.
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key키임');
const key2 = Symbol('key2북따다');
const key3 = Symbol('key키임');
map.set(key1, '할로');
map.set(key2, 'Hello');
console.log('맵', map);
// 맵 Map(2) { Symbol(key키임) => 'Hello', Symbol(key2북따다) => 'Hello' }
console.log(map.get(key2)); // Hello
console.log(key1 === key3); // false
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

//! 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//! 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key샥');
const k2 = Symbol.for('key샥');
console.log(k1 === k2); // true
//! 해당 문자열에 대한 정보 알기 keyFor
console.log(Symbol.keyFor(k1)); // key샥

const obj = { [k1]: 'Hello', [Symbol('key요')]: 1 };
console.log(obj); // { [Symbol(key샥)]: 'Hello', [Symbol(key요)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key요')]); // undefined
