// either: a or b
interface Either<L, R>{
    left: () => L;
    right: () => R;
    // left: () => number;
    // right: () => number
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R){}
    left(): L{
        return this.leftValue;
    }
    right(): R{
        return this.rightValue;
    }
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();
const cc = new SimpleEither(4, "hello");
console.log(cc);
const best = new SimpleEither({ name: 'ellie'}, 'hello');
console.log(best);