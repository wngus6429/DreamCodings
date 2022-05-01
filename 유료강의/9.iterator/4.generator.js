// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log('콘솔로그', i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
next = multiple.next();
console.log('두번쨰ㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(next.value, next.done);
//! 리턴을 하게되면 끝나게 된다.
// multiple.return();
//! multiple안으로 에러를 던짐
// multiple.throw('Error!');

next = multiple.next();
console.log('세번째ㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(next.value, next.done);
