interface Stack{
    readonly size: number;
    push(value:string): void;
    pop(): string;
}

// 
type StackNode = {
    readonly value: string;
    readonly next?: StackNode; // next: StackNode | undefined;
}

class StackImpl implements Stack {
    private _size: number = 0; // _ 이거는 내부에서만 쓴다는거
    private head?: StackNode;
    
    constructor(private capacity: number) {}
    
    get size() { return this._size }
    push(value: string) {
        if(this.size === this.capacity) {
            throw new Error("Stack is Full!");
        }
        
        const node:StackNode = { value: value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop(): string {
        // null과 undefined는 같다. 결국 둘다 체크 가능. ===은 안되니 주의
        if(this.head == null){
            throw new Error("stack is empty");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(10);
console.log(stack); // { capacity: 10, _size: 0 }
stack.push("엘리");
stack.push("주현");
stack.push("주현님");
while(stack.size !== 0){
    console.log(stack.pop());
}