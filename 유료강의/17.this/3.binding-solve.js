function Cat(name) {
  this.name = name;
  //! 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억해요!
  //! 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  //* 정적으로 사용되게끔 arrow함수를 사용한다.
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  //! 고정으로 바인딩하기 ㅋㅋ
  //! 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  //* 이렇게 하면 더 이상 동적이 되지 않고 객체 만든 시점에의 객체와 꽁꽁
  //* 함수 만들때마다 수동으로 바인드 하면 불편하니 위에 화살표함수
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName(); // 고양이의 이름을 출력한다옹: 냐옹
dog.printName(); // 강아지의 이름을 출력한다옹: 멍멍

dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹: 냐옹
cat.printName(); // 고양이의 이름을 출력한다옹: 냐옹

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName(); // 고양이의 이름을 출력한다옹: 냐옹
}

printOnMonitor(cat.printName);
