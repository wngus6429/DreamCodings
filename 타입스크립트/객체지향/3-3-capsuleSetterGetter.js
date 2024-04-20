{
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        // 클래스 내부의 어떤 속성값도 필요하지 않기에 static 무언가 오브젝트를
        // 만들수 있는 함수를 제공한다면, 누군가가 생성자를 이용해서 생성하는걸 금지하기 위해서 씀
        // 이럴때는 constructor를 private화 해버리는 경우가. 그러니 new가 안되서
        //! CoffeeMaker.makeMachine() 해야함.
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        //! 앞에 public으로 자동으로 생략되어 있는거임
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            //! static을 붙이면 클래스 레벨이 되어서 (클래스 고유) this가 아니라 클래스 이름
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans");
            }
            this.coffeeBeans += shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots, // shots: shots
                hasMilk: false,
            };
        };
        //! private 붙이면 CoffeeMaker.Bean 뭐시기가 안보임
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level, 인스턴스로 복사 안됨
        return CoffeeMaker;
    }());
    //! Private안하면 43~46, 49~51 둘다 움직임.
    //! Private 안해야 이거 움직임. 아래 49~51도 움직임.
    // const maker = new CoffeeMaker(32); //! private constructor 하면 에러발생
    // maker.coffeeBeans  = 3 //! 9줄의 private로 에러
    // maker.fillCoffeeBeans(32); //! 이걸로 채워야함
    // console.log(maker) //! CoffeeMaker { coffeeBeans: 35 }
    //! Private 했을시, Private하면 위에 43~46코드 안 움직임, 아래3줄만 움직임
    var maker2 = CoffeeMaker_1.makeMachine(30);
    maker2.fillCoffeeBeans(100);
    console.log(maker2); //! CoffeeMaker { coffeeBeans: 130 }
    // private는 어떤 누구라도 클래스 외부에서는 coffeeBeans에 접근 불가능
    // protected 상속을 할때 외부에서는 접근할수 없지만 클래스를 상속한 자식에서는 접근 가능
    // 캡슐화는 클래스를 만들때 외부에서 접근할수 있는것은 무엇인지 내부적으로만 가지고 있어야
    // 하는게 데이터는 무엇인지 결정할수 있다. 외부에 노출해도 되는게 뭔지 잘 생각해야함.
    var User = /** @class */ (function () {
        function User(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = "".concat(this.firstname, " ").concat(this.lastname);
        }
        return User;
    }());
    var user = new User("Steve", "Jobs");
    console.log("User Fullname =", user.fullname); // Steve Jobs
    user.firstname = "ellie";
    console.log("User Fullname =", user.fullname); // Steve Jobs , ellie로 바뀌지 않음.
    var User2 = /** @class */ (function () {
        function User2(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        Object.defineProperty(User2.prototype, "fullname", {
            get: function () {
                return "".concat(this.firstname, " ").concat(this.lastname);
            },
            enumerable: false,
            configurable: true
        });
        return User2;
    }());
    var user2 = new User2("Steve", "Jobs");
    console.log("User2 Fullname =", user2.fullname); // Steve Jobs
    user2.firstname = "ellie";
    console.log("User2 Fullname =", user2.fullname); // ellie Jobs
    var User3 = /** @class */ (function () {
        function User3(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        Object.defineProperty(User3.prototype, "fullname", {
            get: function () {
                return "".concat(this.firstname, " ").concat(this.lastname);
            },
            enumerable: false,
            configurable: true
        });
        return User3;
    }());
    var user3 = new User3("Steve", "Jobs");
    console.log("User3 Fullname =", user3.fullname); // Steve Jobs
    // user3.firstname = "ellie"; // private 에러
    console.log("User3 Fullname =", user3.fullname); // ellie Jobs
    var User4 = /** @class */ (function () {
        function User4(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.internalAge = 4;
        }
        Object.defineProperty(User4.prototype, "fullname", {
            get: function () {
                return "".concat(this.firstname, " ").concat(this.lastname);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User4.prototype, "age", {
            get: function () {
                return this.internalAge;
            },
            set: function (num) {
                if (num < 0) {
                    throw new Error("age should be greater than 0");
                }
                this.internalAge = num;
            },
            enumerable: false,
            configurable: true
        });
        return User4;
    }());
    var user4 = new User4("Steve", "Jobs");
    user4.age = 6;
    console.log("User4 Fullname =", user4.fullname); // Steve Jobs
    console.log("User4.age =", user4.age); // 6
}
