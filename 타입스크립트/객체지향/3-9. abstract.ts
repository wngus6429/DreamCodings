{
    type CoffeeCup = { shots: number; hasMilk?: boolean; hasSugar?: boolean };

    interface CoffeeMaker { makeCoffee(shots: number): CoffeeCup; }
    
    // abstract = 추상화, 이 자체로는 오브젝트를 못 만듬.
    abstract class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0;
        constructor(coffeeBeans: number) {
            console.log('확인', coffeeBeans);
            this.coffeeBeans = coffeeBeans;
        }
        // static makeMachine(coffeeBeans:number): CoffeeMachine  {
        //     return new CoffeeMachine(coffeeBeans);
        // }
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

        // 자식 클래스마다 다르게 구현해야 하기 때문에 protected
        protected abstract extract(shots: number):CoffeeCup;

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
        
        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }
    
    // 커피머신을 상속한 클래스
    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return {
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
    ]
    machines.forEach(machine => {
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
        machine.makeCoffee(1);
    })

}