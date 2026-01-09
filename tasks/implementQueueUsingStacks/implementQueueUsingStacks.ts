export class MyQueue {
    private stack1: MyStack<number>;
    private stack2: MyStack<number>;

    constructor() {
        this.stack1 = new MyStack<number>();
        this.stack2 = new MyStack<number>();
    }

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (!this.stack2.isEmpty()) {
            return this.stack2.pop();
        } else {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }

    peek(): number {
        if (!this.stack2.isEmpty()) {
            return this.stack2.peek();
        } else {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.peek();
        }
    }

    empty(): boolean {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
}

class MyStack<T> {
    private readonly stackArray: T[];
    private top: number;

    constructor() {
        this.stackArray = [];
        this.top = -1;
    }

    push(x: T): void {
        this.stackArray[++this.top] = x;
    }

    pop(): T {
        return this.stackArray[this.top--];
    }

    peek(): T {
        return this.stackArray[this.top];
    }

    isEmpty(): boolean {
        return this.top === -1;
    }
}
