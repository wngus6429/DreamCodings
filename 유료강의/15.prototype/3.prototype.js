//! 이렇게 하는것보다 생성사 사용
// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}
//? 위에처럼 함수를 지정하면 인스턴스마다 함수가 생성되니
//? 메모리 낭비가 심해지기에 프로토타입을 이용한다.
//! 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log('도그', dog1, dog2); //! 출력하면 함수가 없다.
// 도그 Dog { name: '뭉치', emoji: '🐶' } Dog { name: '코코', emoji: '🐩' }
//! 프로토타입 활용~~!!
dog1.printName(); // 뭉치 🐶
dog2.printName(); // 코코 🐩

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
//! 오버라이딩
//! 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
//! 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName(); // 안녕!!

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello(); // Hello!
console.log(Dog);
// [Function: Dog] { hello: [Function (anonymous)] }
Dog.MAX_AGE = 20;
console.log(Dog);
// [Function: Dog] { hello: [Function (anonymous)], MAX_AGE: 20 }
