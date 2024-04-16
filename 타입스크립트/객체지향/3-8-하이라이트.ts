{
    type CoffeeCup = { shots: number; hasMilk?: boolean; hasSugar?: boolean };

    interface CoffeeMaker { makeCoffee(shots: number): CoffeeCup; }
    
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7;
        private coffeeBeans: number = 0;
        constructor(
            coffeeBeans: number, 
            private milk: MilkFrother, 
            private sugar: SugarProvider
        ) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }
    
    interface MilkFrother{
        makeMilk(cup:CoffeeCup): CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup:CoffeeCup): CoffeeCup;
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
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    class NoMilk implements MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }

    // 설탕 제조기
    class SugarMixer implements SugarProvider{
        private getsugar(){
            console.log('getting some sugar from jar!!!');
            return true;
        }
        addSugar(cup:CoffeeCup): CoffeeCup{
            const sugar = this.getsugar();
            return {
                ...cup, hasSugar:sugar
            }
        }
    }
    class NoSugar implements SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }
    
    // 우유
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    // 설탕
    const candySugar = new SugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();
    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
    console.log('sweetCandyMachine', sweetCandyMachine);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar)
    console.log('sweetMachine', sweetMachine);
    const latteeMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    console.log('latteeMachine', latteeMachine);
    const coldLatteeMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    console.log(coldLatteeMachine);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar)
    console.log(sweetLatteMachine);
}