/** @format */

// const name = "Park";
// const age = 40;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

//오브젝트는 key와 value의 집합체임 object = {key:value}

// 1. Literals and properties
const obj1 = {}; //괄호를 열어서 오브젝트 만드는걸 오브젝트 리터럴이라 함
const obj2 = new Object(); //new라는 키워는 오브젝트 컨스트럭터
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const park = { name: "parkjuhyun", age: 4 };
print(park);

park.hasJob = true; //오브젝트 추가 하는 미친짓 가능
console.log(park);
console.log(park.hasJob);

delete park.hasJob;
console.log(park);

//2. Computed properties 계산된 프로퍼티
console.log(park.name);
console.log(park["name"]); //이게 computed properties
//배열에서 받아 올수도 잇네
//다만 문자열 취급을 해줘야함. "" 이거 없으면 안됨
park["hasjob"] = true;
console.log(park.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(park, "name");
printValue(park, "age");

//5. in operator
//해당하는 오브젝트 안에 key가 있는지 없는지 확인
console.log("name" in park);
console.log("age" in park);
console.log("random" in park);
console.log(park.ranndom);

//6. for .. in vs for ..of
// for (key in obj)
for (key in park) {
  //park가 가지고 있는 key들이 블럭을 돌때마다
  //key들이 key라는 지역변수에 할당, 기능으로서의 key가 아님
  console.log(key);
}
//console.clear(); //이전 내용들이 싹 사라짐

const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// for (value of iterable)
const arrays = [1, 2, 4, 5];
for (value of arrays) {
  console.log("야이" + value);
}
