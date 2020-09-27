/** @format */

"use strict";

//Array
//1.Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍔", "🌭"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); //마지막 데이터 가져오기

//3. Looping over an array
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log("3", fruits[i]);
}

//b. for of
for (let fruit of fruits) {
  console.log("B", fruit);
}
console.clear();

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
// push 데이터를 넣음.
fruits.push("🍕", "🍟");
console.log(fruits);

//pop 데이터를 삭제함
fruits.pop(); //끝에거 삭제
fruits.pop();
console.log(fruits);

// 앞에서 데이터 넣고 뺴기 가능함.
// unshift 앞에서 데이터 넣기
fruits.unshift("🥗");
console.log(fruits);
// shift 앞에서 데이터 삭제
fruits.shift("🥗");
console.log(fruits);

// fruits.push("🥩", "🍛", "🍣");
// console.log(fruits);
// fruits.splice(1); //지울려는 갯수를 말 안하면
// // 지금 적혀진 1, 처음 1개 빼고 다 삭제
// console.log(fruits);

fruits.push("🥩", "🍛", "🍣");
console.log(fruits);
fruits.splice(1, 1, "🥞", "🍖"); //지우고 그 자리에 삽입도 가능
console.log(fruits);
const fruits2 = ["🍭", "🍧"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 그 다음에 검색
console.log(newFruits);
console.log(fruits.indexOf("🍛"));
