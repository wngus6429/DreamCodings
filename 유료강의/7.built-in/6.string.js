const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]); //문자 반환
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2)); //문자 반환
// 인덱스 반환
console.log(text.indexOf('l')); // 앞에서부터 l찾음
console.log(text.lastIndexOf('l')); //뒤에서부터 l 찾음

console.log('인클', text.includes('tx')); //포함하는지
console.log(text.includes('h')); // true, false
console.log(text.includes('H'));

console.log(text.startsWith('He')); // 시작하는지
console.log(text.endsWith('!')); // 끝나는지

console.log(text.toUpperCase()); //전부 대문자
console.log(text.toLowerCase()); // 전부 소문자

console.log(text.substring(0, 2)); // 2번째 이전까지 가져오기
console.log(text.slice(2)); // 인덱스2부터 잘라서 가져옴 llo World!
console.log(text.slice(-2)); // 뒤에서 2번째 d!

const space = '            space       ';
console.log(space.trim()); // 공백제거

const longText = 'Get to the, point';
console.log(longText.split(' ')); // 특정을 잘라서 배열로 만듬
console.log(longText.split(', ', 2)); // 2덩어리만 받고 싶다
