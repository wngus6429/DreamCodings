/** @format */

//함수 선언
function dosomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}
//함수 호출
//dosomething(add);

const addFun = add;
console.log(add);
addFun(1, 2);
