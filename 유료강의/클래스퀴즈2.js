class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
} //앞에께 자식이고 뒤에 Employee가 부모
class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000; //이런식으로 적는게 알아보기 편해서
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000; //이렇게 안하면 위에 부모 payRate를 봐야함
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}
const 박주현 = new FullTimeEmployee('박주현님', 's/w', 30);
console.log(박주현);
const 현주박 = new PartTimeEmployee('현주박님', 's/w', 20);
console.log(현주박);
console.log(박주현.calculatePay());
console.log(현주박.calculatePay());
