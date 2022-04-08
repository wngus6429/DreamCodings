class Counter{
    #value;
    constructor(startValue){
        if(isNaN(startValue) || startValue){
            this.#value = 0;
        } else{
            this.#value = startValue
        }
    }
    // get 안해주면 위에 # 때문에 undefined나옴
    get value () {
        return this.#value
    }
    up = () => {
        this.#value++
    }
}
const counter = new Counter(0)
counter.up()
counter.up()
counter.up()
counter.value = 4
console.log(counter.value);