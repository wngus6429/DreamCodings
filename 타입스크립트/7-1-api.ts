const students = [{ passed: true }, { passed: true }, { passed: false }];
const result = students.every((student) => {
  return student.passed;
});
console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

// const animals: Animal[] = [new Cat(), new Cat(), new Dog()]
const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
  // isCat이 있다면 true라는 소리지
}
console.log(animals.every<Cat>(isCat));

//* 2024/04/14 복습
