{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }
    const BEANS_GRAMM_PER_SHOT:number = 7
    // 변수에 7이 들어가서 number라고 인식 하지만 굳이 적어줘도 됨. 
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            console.log(coffeeBeans)
            throw new Error("Not enough coffee beans"); 
        }
        coffeeBeans += shots * BEANS_GRAMM_PER_SHOT;
        return{
            shots, // shots: shots
            hasMilk: false
        }
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}