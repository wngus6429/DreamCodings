'use strict';
//! 엄격 모드 strict mode
// !리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임
//? var x = 1;
//? delete x; // 이렇게 변수 삭제하는거 안됨

//! use strict하면 키워드 앞에 꼭 붙여야함
function add(x) {
  'use strict'; //! 이렇게 함수 안에서만 사용 가능함
  var a = 2;
  var b = a + x;
  console.log('this', this); //undefined
  console.log('b', b); // 3
}
add(1);

//! 엄격모드에서는 num 앞에 키워드 붙여야함
const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
