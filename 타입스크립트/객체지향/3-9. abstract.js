var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // abstract = 추상화, 이 자체로는 오브젝트를 못 만듬.
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0;
            console.log('확인', coffeeBeans);
            this.coffeeBeans = coffeeBeans;
        }
        // static makeMachine(coffeeBeans:number): CoffeeMachine  {
        //     return new CoffeeMachine(coffeeBeans);
        // }
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () { console.log('cleaning the machine...'); };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans ".concat(shots, ", \uCEE4\uD53C\uBE48 ").concat(this.coffeeBeans, " \uCDA9\uC804"));
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            console.log('현재 커피빈 갯수', this.coffeeBeans);
        };
        CoffeeMachine.prototype.preheat = function () { console.log('heating'); };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    // 커피머신을 상속한 클래스
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans, serialNumber) {
            var _this = _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            return _this;
        }
        CaffeLatteMachine.prototype.steamMilk = function () { console.log('steam milk'); };
        CaffeLatteMachine.prototype.extract = function (shots) {
            this.steamMilk();
            return {
                shots: shots,
                hasMilk: true
            };
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    // 커피머신을 상속한 클래스
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeeMaker.prototype.extract = function (shots) {
            return { shots: shots, hasSugar: true };
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_1));
    var machines = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(20),
    ];
    machines.forEach(function (machine) {
        console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
        machine.makeCoffee(1);
    });
}
