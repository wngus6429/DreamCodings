// !퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// !단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓'];
// output: [ '🍌', '🥝', '🍇', '🥝' ]
// function replace(array, from, to) {
//   //   const replaced = array;
//   const replaced = Array.from(array);
//   for (let i = 0; i < replaced.length; i++) {
//     if (replaced[i] === from) {
//       replaced[i] = to;
//     }
//   }
//   return replaced;
// }
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍓', '🥝');
// console.log(result);

// !퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// !단, 주어진 배열을 수정하지 않도록!
function replace2(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const array2 = ['🍌', '🍓', '🍇', '🍓'];
const result2 = replace2(array2, '🍓', '🥝');
console.log(result2);

// !퀴즈2:
// !배열과 특정한 요소를 전달받아,
// !배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// !input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// !output: 2
// function solution(question, what) {
//   return question.reduce((count, value) => (value === what ? (count += 1) : (count += 0)), 0);
// }
// const question = ['🍌', '🥝', '🍇', '🥝'];
// console.log(solution(question, '🥝'));

// function solution(question, what) {
//   return question.reduce((count, value) => {
//     if (value === what) {
//       count++;
//     }
//     return count;
//   }, 0);
// }
// const question = ['🍌', '🥝', '🍇', '🥝'];
// console.log(solution(question, '🥝'));

function solution(question, what) {
  return question.filter((value) => value === what).length;
}
const question = ['🍌', '🥝', '🍇', '🥝'];
console.log(solution(question, '🥝'));

function solution1(question1, question2) {
  return question2.filter((item) => {
    for (const ii of question1) {
      if (ii === item) {
        return item;
      }
    }
  });
}
const question1 = ['🍌', '🥝', '🍇'];
const question2 = ['🍌', '🍓', '🍇', '🍓'];
console.log('시발', solution1(question1, question2));
// !ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function 함수(배열1, 배열2) {
  return 배열1.filter((item) => 배열2.includes(item));
}
const 배열1 = ['🍌', '🥝', '🍇'];
const 배열2 = ['🍌', '🍓', '🍇', '🍓'];
console.log('필터', 함수(배열1, 배열2));
// !ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// function solution1(question1, question2) {
//   let answer = [];
//   for (let i = 0; i < question1.length; i++) {
//     for (let g = 0; g < question2.length; g++) {
//       if (question1[i] === question2[g]) {
//         answer.push(question1[i]);
//       }
//     }
//   }
//   return answer;
// }
// const question1 = ['🍌', '🥝', '🍇'];
// const question2 = ['🍌', '🍓', '🍇', '🍓'];
// console.log(solution1(question1, question2));
// ! 엘리의코드
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// ! 퀴즈4
// ! 5이상 (보다 큰) 숫자들의 평균
function 함수(nums) {
  return nums.filter((item) => item > 5).reduce((avg, num, index, array) => avg + num / array.length, 0);
}
const nums = [3, 16, 5, 25, 4, 34, 21];
console.log('퀴즈4', 함수(nums));
