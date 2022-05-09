//! 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
//! (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
dog.age = 4;
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
delete dog.name;
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
ellie.name = '엘리얌';
console.log(dog); // 다른 객체 참조된건 얼리지 못 함. 얕은 레벨만 얼림
// { name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
//! 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
// const cat = { ...dog };
//* 중요 방법 위아래
const cat = {};
Object.assign(cat, dog); //cat에 dog에 있는 프로퍼티들을 복사해옴

console.log('캣', cat); // 캣 { name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }
Object.seal(cat);
console.log(cat); // { name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }
cat.name = '냐옹';
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
delete cat.emoji; // seal은 값만 수정 가능, 삭제는 안됨
console.log('딜리트', cat);
// 딜리트 { name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
console.log(Object.isFrozen(dog)); //? 동결 되었나?? true
console.log(Object.isSealed(cat)); //? 밀봉 되었나?? true

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
//! 확장 금지 preventExtensions 추가만 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = '어흐응';
console.log(tiger); // { name: '어흐응' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 1;
console.log(tiger); // {} 추가 안됨
