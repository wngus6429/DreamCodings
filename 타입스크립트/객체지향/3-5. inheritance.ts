{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7 // class level, 인스턴스로 복사 안됨
        private coffeeBeans: number = 0; // instance (object) level
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeeMachine  {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans: number): void {
            if (beans < 0) { throw new Error('value for beans should be greater than 0');}
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void{
            console.log('heating')
        }

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
            // //! static을 붙이면 클래스 레벨이 되어서 (클래스 고유) this가 아니라 클래스 이름
        }
    }
}