{
    type CoffeeCup = { shots: number; hasMilk?: boolean; hasSugar?: boolean };

    interface CoffeeMaker { makeCoffee(shots: number): CoffeeCup; }
    
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0;
        constructor(coffeeBeans: number) {
            console.log('확인', coffeeBeans);
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans:number): CoffeeMachine  {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans: number): void {
            if (beans < 0) { throw new Error('value for beans should be greater than 0');}
            this.coffeeBeans += beans;
        }
        clean() { console.log('cleaning the machine...') }
        private grindBeans(shots: number){
            console.log(`grinding beans ${shots}, 커피빈 ${this.coffeeBeans} 충전`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            console.log('현재 커피빈 갯수', this.coffeeBeans)
        }

        private preheat():void{ console.log('heating') }
        private extract(shots: number):CoffeeCup{
            console.log(`pulling ${shots} shots...`)
            return{
                shots, // shots: shots
                hasMilk: false
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 커피머신을 상속한 클래스
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans:number, public readonly serialNumber:string){
            super(beans);
        }
        private steamMilk(): void{ console.log('steam milk');}
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            console.log('상속커피', coffee);
            this.steamMilk();
            return { ...coffee, hasMilk: true }
        }
    }
    
    // 커피머신을 상속한 클래스
    class SweetCoffeeMaker extends CoffeeMachine{
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return { ...coffee, hasSugar: true }
        }
    }

    // 다형성의 장점, 내부적으로 구현된 다양한 클래스들이 한가지 
    // 인터페이스를 구현하거나 또는 동일한 부모클래스를 상속했을때 
    // 이렇게 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API를 부를수 있는게 장점이다. 
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(10),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
        new CoffeeMachine(10),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
    ]
    // 다형성이란 하나의 인터페이스나 또는 부모의 클래스를 상속한 자식 
    // 클래스들이 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로
    // 다양하게 구성함으로서 조금 더 다양성을 만들수 있는걸 말한다.
    machines.forEach(machine => {
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
        machine.makeCoffee(1);
    })

    // const machine = new CoffeeMachine(23);
    // const latteMachine = new CaffeLatteMachine(23, "ssss");
    // const coffee = latteMachine.makeCoffee(1);
    // console.log('커피임', coffee);
    // console.log(latteMachine.serialNumber)
}