{
  type CoffeeCup = { shots: number; hasMilk: boolean };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      console.log("확인", coffeeBeans);
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("cleaning the machine...");
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans ${shots}, 커피빈 ${this.coffeeBeans} 충전`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      console.log("현재 커피빈 갯수", this.coffeeBeans);
    }
    // 가열중
    private preheat(): void {
      console.log("heating");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots, // shots: shots
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // coffeeMachine을 상속중이라. coffeeMachine에 있는걸 사용할수 있음.
  // clean(), fillCoffeeBeans, makeCoffee 사용가능
  class CaffeLatteMachine extends CoffeeMachine {
    // 초기생성
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    // 단순 스팀 가열중이라는 콘솔 보여줌
    private steamMilk(): void {
      console.log("steam milk");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      console.log("상속커피", coffee);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }
  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "ssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log("커피임", coffee);
  // latteMachine에서만 serialNumber에 접근가능함
  console.log(latteMachine.serialNumber);
}
