/** @format */

//2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    //fields
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User("steve", "job", -1);
console.log(user1.age);
