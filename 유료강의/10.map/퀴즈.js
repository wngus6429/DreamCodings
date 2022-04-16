// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const answer = new Set(fruits);
//! 이렇게만 하면 Set(4) { '🍌', '🍎', '🍇', '🍑' }
const 왓 = [...answer]; // [...new Set(fruits)]
console.log(왓);

// ! 엘리의 답, 재사용성에 중점
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

//! 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
function findInter(set1, set2) {
  //! set은 가지고 있는지 has를 사용 할 수 있다.
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
console.log(findInter(set1, set2));
