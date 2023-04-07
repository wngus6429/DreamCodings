interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('Full time!!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('Part time!!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥임
// function pay(employee: Employee): Employee{
//     employee.pay();
//     return employee
// }

// 제네릭은 일반적인 타입, 어떤것도 가능해서,
// 코딩하는 시점에는 임플로이에 pay가 있는지 string인지 뭔지 몰라 사용 안됨
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🍖',
};
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'name')); // 20
console.log(getValue(obj2, 'animal')); // 20

// 어떤한 오브젝트 타입을 받고 k는 오브젝트의 key중에서 하나여야 하고
// 리턴되는것은 T가 가리키고 있는 value 타입이여야 한다. 좀 어려움
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K]
// 이 함수는 두 개의 제네릭 타입 파라미터를 사용합니다. T는 객체의 타입을 나타내고, K는 객체의 키를 나타냅니다. K는 keyof T를 확장(extends)하여, 객체 T의 키 중 하나여야 함을 나타냅니다. 이를 통해 타입 안전성이 보장됩니다.

// (obj: T, key: K)
// 함수의 인자는 obj와 key입니다. obj는 타입 T의 객체를 나타내고, key는 타입 K의 키를 나타냅니다. 여기서 K는 keyof T를 확장하므로, 전달받는 key는 반드시 obj의 키 중 하나여야 합니다.

// T[K]
// 함수의 반환 타입은 T[K]입니다. 이는 주어진 객체 T와 키 K에 대응하는 값의 타입을 나타냅니다. 이를 통해 함수가 객체의 키에 대응하는 값을 정확한 타입으로 반환함이 보장됩니다.

// return obj[key];
// 함수의 내부 구현에서는 obj[key]를 반환합니다. 이때, key는 타입 K로, obj의 키 중 하나여야 하므로, 함수는 obj의 키에 대응하는 값을 반환하게 됩니다.
