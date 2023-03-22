interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log("Full time!!");
    }
    workFullTime(){

    }
}

class PartTimeEmployee implements Employee {
    pay(){
        console.log("Part time!!");
    }
    workPartTime(){
    
    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥임
// function pay(employee: Employee): Employee{
//     employee.pay();
//     return employee
// }

// 제네릭은 일반적인 타입, 어떤것도 가능해서, 
// 코딩하는 시점에는 임플로이에 pay가 있는지 string인지 뭔지 몰라 사용 안됨
function pay<T extends Employee>(employee:T): T{
    employee.pay();
    return employee
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
    name: "ellie",
    age: 20,
}

const obj2 = {
    animal: "🍖",
}
console.log(getValue(obj, 'name')) // ellie
console.log(getValue(obj, 'name')) // 20
console.log(getValue(obj2, 'animal')) // 20

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];    
}