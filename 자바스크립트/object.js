/** @format */
//클래스 declarations 선언
class Person {
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}:hello!`);
  }
}

const elite = new Person("eli", 20);

console.log(elite.name);
console.log(elite.age);
elite.speak();
