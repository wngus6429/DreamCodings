// console.log(globalThis);
// console.log(Infinity);

// const text = 'Hello world1!'
// for (const i of text) {
//     console.log(i);
// }
// const ids = 'user1, user2, user3, user4'
// const answer = ids.split(', ')
// console.log(answer);

// // 1초에 한번씩 시계를 날짜를 포함
// setInterval(() => {
//     const now = new Date()
//     console.log(now.toLocaleString('ko-Kr'));
// }, 1000);

let insertionSort = function (array) {
  let i = 1; //2번째 부터 시작
  let j; // 뽑은 숫자를 알맞은 위치에 넣을떄 사용
  let temp; //뽑은 숫자 값을 저장할 변수
  for (i; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자를 선택함
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정,
      // 선택한 숫자가 정렬된 숫자보다 작으면
      array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다
    }
    array[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return array;
};
console.log(insertionSort([5, 6, 1, 2, 4, 3, 11, 50, 32]));
