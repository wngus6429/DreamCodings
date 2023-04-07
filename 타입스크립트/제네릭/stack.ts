interface Stack<T> {
  readonly size: number;
  push(value: T): void; // T라는 타입을 전달해줘야 하고
  pop(): T; // T 라는 타입이 리턴된다.
}

type StackNode<T> = {
  readonly value: T; // T를 리턴하고
  readonly next?: StackNode<T>; // 동일한 T타입의 스택노드를 가리킬수 있다.
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(435);
stack2.push(358);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
