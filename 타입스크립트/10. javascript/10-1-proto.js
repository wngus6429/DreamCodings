const x = {};
const y = {};
console.log(x);
console.log(y.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans){
    this.beans = beans
    this.makeCoffee = (shots) => {
        console.log('making...')
    }
}
CoffeeMachine.prototype.makeCoffee = function 
const machine1 = new CoffeeMachine(10)
const machine2 = new CoffeeMachine(20)
console.log(machine1)
console.log(machine2);

// 4분 20초