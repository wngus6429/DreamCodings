//! this 바인딩
//! 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
//! this는 항상 자신의 인스턴스 자체를 가리킴!
//! 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
//! 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
//! 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName(); //! 고양이의 이름을 출력한다옹: 냐옹
dog.printName(); //! 강아지의 이름을 출력한다옹: 멍멍
//! 누가 호출 하느냐에 따라서 this가 달라짐
dog.printName = cat.printName;
dog.printName(); //! 고양이의 이름을 출력한다옹: 멍멍
cat.printName(); //! 고양이의 이름을 출력한다옹: 냐옹

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName(); // 이 함수 안에 아무것도 없지. 호출하는 사람이 없음
}
//* cat에 있는 printName의 참조값을 전달한거지
printOnMonitor(cat.printName);
//! 고양이의 이름을 출력한다옹: undefined
