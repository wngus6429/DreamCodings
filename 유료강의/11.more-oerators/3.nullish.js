//!  Nullish Coalescing Operator
//!  ES11 (ECMAScript 2020)
//   ?? null, undefined
//!  || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
// num이 없을때만 기본값인 -1을 출력 하고 싶다.
// 0을 뽑고 싶은데 -1이 나온다. 이것 땜에 버그가 많이 발생
console.log(num || '-1');
// 0이 false인걸 감안해서, 값이 null, defined 즉 없을때만
//-1을 하고 싶을때 물음표 두개를 사용한다.
console.log(num ?? '-1');
