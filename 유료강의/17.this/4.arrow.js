//! 자바스크립트의 함수는 만능 슈퍼맨!
//! 함수처럼 사용, 생성자 함수로 사용 (클래스)
//! 하지만, 이걸 위해서 불필요한 무거운 프로토타입
//! (많은 데이터를 담고 있는 객체) 생성됨
const dog = {
  name: 'Dog',
  play: function () {
    // 💩 무거워지기 때문,
    // * 생성자 함수처럼 만들어져서, 뚱뚱한 프로토타입이 생성됨
    // 그리고 이렇게 되면 this 바인딩이 동적으로 된다
    // 조금 개선 할려면 play: () => {} 이렇게 하면 된다.
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); // 💩
console.log(obj);

//* ES6
const cat = {
  name: 'cat',
  play() {
    // 위에는 키 다음에 값으로 함수, 여기는 객체 안에서 함수 메서드
    //! 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play();
// 위에는 되지만 여기서는 안된닼ㅋ
// const obj1 = new cat.play(); // 생성자 함수로 사용 ❌, 크래쉬

/**
 //* 화살표 함수의 특징
 *! 1. 문법이 깔끔함
 *! 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 *! 3. 함수 자체 arguments
 *! 4. this에 대한 바인딩이 정적으로 결정됨
 *!  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
function sum(a, b) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log('this임', this); // {}
};
printArrow(); // {}
cat.printArrow = printArrow;
cat.printArrow(); // {}
// this도 여전히 정적으로 결정된 노드 모듈에서의 글로벌 this가 출력
