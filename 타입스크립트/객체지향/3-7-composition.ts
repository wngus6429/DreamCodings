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

    
    interface MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup:CoffeeCup):CoffeeCup;
    }
    
    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('steaming some milk...');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('Fancy steaming some milk...');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk():void{
            console.log('Fancy steaming some milk...');
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return { ...cup, hasMilk: true }
        }
    }

    // 설탕 제조기
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('getting some Sugar from jar!!!');
            return true;
        }
        addSugar(cup:CoffeeCup): CoffeeCup{
            const sugar = this.getSugar();
            return { ...cup, hasSugar:sugar }
        }
    }
    
    class CaffeLatteMachine extends CoffeeMachine{
        constructor( beans:number, public readonly serialNumber:string, 
            private milkFother: MilkFrother, 
        ){
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }
    
    // 커피머신을 상속한 클래스
    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans:number, private sugar: SugarProvider){
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee)
        }
    }

    class SweetCoffeeLatteMachine extends CoffeeMachine {
        constructor( private beans:number, private milk: MilkFrother,
            private sugar: SugarProvider)
        {
            super(beans)
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }
    
    // 우유
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    // 설탕
    const candySugar = new SugarMixer();
    const sugar = new SugarMixer();
    //
    const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar)
    const sweetMachine = new SweetCoffeeMaker(12, sugar)

    console.log(sweetCandyMachine);
    console.log(sweetMachine);

    // const latteeMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
    // const coldLatteeMachine = new CaffeLatteMachine(12, 'SS', ColdMilkSteamer);
    // const sweetLatteMachine = new SweetCoffeeLatteMaker(12, cheapMilkMaker, candySugar)

}