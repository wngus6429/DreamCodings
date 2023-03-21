{
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    }
    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7 // class level, 인스턴스로 복사 안됨
        private coffeeBeans: number = 0; // instance (object) level
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
    // 클래스 내부의 어떤 속성값도 필요하지 않기에 static 무언가 오브젝트를 
    // 만들수 있는 함수를 제공한다면, 누군가가 생성자를 이용해서 생성하는걸 금지하기 위해서 씀
    // 이럴때는 constructor를 private화 해버리는 경우가. 그러니 new가 안되서 
        //! CoffeeMaker.makeMachine() 해야함.
        static makeMachine(coffeeBeans:number): CoffeeMaker  {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans: number): void {
            if (beans < 0) { throw new Error('value for beans should be greater than 0');}
            this.coffeeBeans += beans;
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
    maker.fillCoffeeBeans(32);
    // private는 어떤 누구라도 클래스 외부에서는 coffeeBeans에 접근 불가능
    // protected 상속을 할때 외부에서는 접근할수 없지만 클래스를 상속한 자식에서는 접근 가능
    // 캡슐화는 클래스를 만들때 외부에서 접근할수 있는것은 무엇인지 내부적으로만 가지고 있어야 
    // 하는게 데이터는 무엇인지 결정할수 있다. 
    // 외부에 노출해도 되는게 뭔지 잘 생각해야함.

    class User{
        // private firstname: string;
        // private lastname: string;
        // fullname: string;
        get fullname(): string {
            return `${this.firstname} ${this.lastname}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num:number){
            if(num < 0) {
                throw new Error('age should be greater than 0');
            }
            this.internalAge = num;
        }
        constructor(private firstname: string, private lastname: string) {
            // this.firstname = firstname;
            // this.lastname = lastname;
            // this.fullname = `${this.firstname} ${this.lastname}`;
        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 6;
    // console.log(user.fullname); // 'Steve', 'Jobs'
    // user.firstname = "Park";
    // console.log(user.fullname); // 'Steve', 'Jobs'
    // GETTER, SETTER 필요
}    