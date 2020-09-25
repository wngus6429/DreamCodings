/** @format */

const person1 = { name: "bob", age: 2 };
const person2 = { name: "Qob", age: 3 };
const person3 = new Person("park", 30);

//이게 바로 4. Constructor Function
function Person(name, age) {
  //this={} 이게 생략된거임
  this.name = name;
  this.age = age;
  // return this 결국 this를 리턴함.
}

//console.log(person3);

//7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// const user = { name: "park", age: 20 };
// const user2 = user;
// console.log(user2);
// user2.name = "coder";
// console.log(user);

const user = { name: "park", age: 20 };
const user2 = user;
user2.name = "coder";
console.log("user", user);
//옛날 방법
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log("user3", user3);

const user4 = {};
Object.assign(user4, user);
//위에껄 압축한게
const user4 = Object.assign({}, user);

console.log("user4", user4);
