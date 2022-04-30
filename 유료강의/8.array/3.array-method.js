// !배열의 함수들
// !배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

// !특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// !특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// !배열안에 특정한 아에팀이 있는지 체크
console.log(fruits.includes('🍎'));

// !추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log('fruits', fruits);
console.log(length);

// !추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// !제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log('pop', fruits); // 하나 제거되고 남은것들이 있음.
console.log(lastItem); // pop에서 제거된 아이템이 들어있음.

// !제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍌', '🍎', '🍋' ]
console.log(lastItem);

// !중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log('splice', fruits); // 배열 자체를 수정(업데이트)
// [ '🍌', '🍋' ]
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓'); // 두번째 0도 가능
console.log('splice2', fruits); // 배열 자체를 수정(업데이트)
// [ '🍌', '🍎', '🍓' ]

// !잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr); // [ '🍌', '🍎' ], 잘라진것만
console.log('slice', fruits); //기존것들은 그대로
// [ '🍌', '🍎', '🍓' ]
newArr = fruits.slice(-1);
fruits.slice(1); // 1부터 전부 삭제
console.log('slice2', fruits);
// [ '🍌', '🍎', '🍓' ]
console.log(newArr); // [ '🍓' ]

// !여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // 그대로
console.log(arr2); // 그대로
console.log(arr3); // 합혀진거
// [ 1, 2, 3, 4, 5, 6 ]

// !순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]
console.clear();
// !중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3], [4, [5, 6, [3, 4]]],
];
console.log('arr', arr);
// arr [ [ 1, 2, 3 ], [ 4, [ 5, 6, [Array] ] ] ]
console.log('flat', arr.flat(3));
// flat [ 1, 2, 3, 4, 5, 6, 3, 4 ]
arr = arr.flat(3);
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
// !특정한 값으로 배열을 채우기
arr.fill(0); // !배열 자체를 수정
console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3); // 마지막껀 포함안함
console.log('필', arr);
//필 [ 0, 's', 's', 0, 0, 0, 0, 0]

arr.fill('a', 1);
console.log(arr);
// [ 0, 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]

// !배열을 문자열로 합하기
let text = arr.join();
console.log(text);
// 0,a,a,a,a,a,a,a
text = arr.join(' | ');
console.log(text);
// 0 | a | a | a | a | a | a | a
