{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }
    
    class CoffeeMaker{
        static BEANS_GRAMM_PER_SHOT:number = 7 // class level, 인스턴스로 복사 안됨
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // 클래스 내부의 어떤 속성값도 필요하지 않기에 static
        static makeMachine(coffeeBeans:number): CoffeeMaker  {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            //! static을 붙이면 클래스 레벨이 되어서 (클래스 고유) this가 아니라 클래스 이름
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans"); 
            }
            this.coffeeBeans += shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots, // shots: shots
                hasMilk: false
            }
        }
    }
    const maker = new CoffeeMaker(32);
    console.log(maker);
    
    // static 붙어 있엇어 실행이 가능했던거
    const make2 = CoffeeMaker.makeMachine(3)
    console.log(make2);
}