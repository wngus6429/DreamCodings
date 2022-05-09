//! 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji); //! super랑 동일
  this.owner = owner; // 여기 Dog에서만 필요한거
}
// Dog.prototype = Object.create(Object.prototype);
//! create는 인자로 전달한 프로토타입을 베이스로해서 새로운 오브젝트를 만듬
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐇..');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play(); //같이 놀자옹!
console.log('dog1', dog1);
dog1.printName(); //멍멍 🐶
const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName(); //어흥 🐯
tiger1.hunt(); //사냥하자! ..🐇..
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

console.log(dog1 instanceof Dog); // Dog의 인스턴스인가
console.log(dog1 instanceof Animal); // Animal 인가? 상속하고 있어서 OK
console.log(dog1 instanceof Tiger); // Tiger는 아님
console.log(tiger1 instanceof Dog);
console.log(tiger1 instanceof Animal);
console.log(tiger1 instanceof Tiger);

// // 프로토타입을 베이스로한 객체지향 프로그래밍
// function Animal(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
// }

// Animal.prototype.printName = function () {
//   console.log(`${this.name} ${this.emoji}`);
// };

// function Dog(name, emoji, owner) {
//   // super(name, emoji)
//   Animal.call(this, name, emoji); // super랑 동일
//   this.owner = owner;
// }
// // Dog.prototype = Object.create(Object.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.play = () => {
//   console.log('같이 놀자옹!');
// };

// function Tiger(name, emoji) {
//   Animal.call(this, name, emoji);
// }

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.hunt = () => {
//   console.log('사냥하자! ..🐇..');
// };

// const dog1 = new Dog('멍멍', '🐶', '엘리');
// dog1.play();
// dog1.printName();
// const tiger1 = new Tiger('어흥', '🐯');
// tiger1.printName();
// tiger1.hunt();

// console.log(dog1 instanceof Dog);
// console.log(dog1 instanceof Animal);
// console.log(dog1 instanceof Tiger);
// console.log(tiger1 instanceof Dog);
// console.log(tiger1 instanceof Animal);
// console.log(tiger1 instanceof Tiger);
