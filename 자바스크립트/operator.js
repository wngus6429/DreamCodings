/** @format */

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string liter ${1 + 2}`);
console.log("elies \nbook");

짝수만 나오게끔
for (i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
  continue;
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡ");

8이 나오면 브레이크
for (i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}
