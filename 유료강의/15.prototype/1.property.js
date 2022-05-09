const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog)); //?    [ 'name', 'emoji' ]
console.log(Object.values(dog)); //?  [ '와우', '🐶' ]
console.log(Object.entries(dog)); //? [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ]
//! 배열 모양인걸 주의해야함
console.log('연습', Object.entries(dog)[0]); //? 연습 [ 'name', '와우' ]

console.log('name' in dog); //? name이라는 키가 있니? true
console.log(dog.hasOwnProperty('name')); //? name이라는 키가 있냐? 위가 간편, true
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
//! 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
//! writable = 값을 수정할수 있는지
//! enumerable= 값을 열거, 이터러블 할수 있는지
//! configurable = key에 해당하는 값, 속성들을 수정, 삭제 할수 있는지
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// { name: { value: '와우', writable: true, enumerable: true, configurable: true },
//  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }  }
const desc = Object.getOwnPropertyDescriptor(dog, 'name'); // s가 안붙음
// 객체 이름, 어떤걸 받아올건지 키 이름
console.log(desc);
// { value: '와우', writable: true, enumerable: true, configurable: true }

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false, // 값을 업데이트 할수 있는지
  enumerable: false, // keys 같은 각종 기능으로 열거 가능하게 할건지
  configurable: false, // 수정 할수 있는지 없는지
});
console.log('도그', dog); // 위에 enumerable 때문에 name: '멍멍' 이 안 보임
console.log(dog.name); // 멍멍
console.log(Object.keys(dog));
// [ 'emoji' ] , 위에 열거 불가능하게 함, enumerable 가 false
delete dog.name; // configurable: false,때문에 삭제 안됨
console.log(dog.name); // 멍멍 , 위에껄로 삭제 안되었음

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); // { firstName: '영희', lastName: '김' }
console.log(student.fullName); // 김 영희
// console.log(student.fullName());
