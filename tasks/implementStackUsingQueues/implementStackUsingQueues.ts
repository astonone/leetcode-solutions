export class MyStack {
    private queue1: MyQueue<number>;
    private queue2: MyQueue<number>;

    constructor() {
        this.queue1 = new MyQueue<number>();
        this.queue2 = new MyQueue<number>();
    }

    push(x: number): void {
        if (!this.queue1.isEmpty() && this.queue2.isEmpty()) {
            this.queue2.insert(x);
            while (!this.queue1.isEmpty()) {
                this.queue2.insert(this.queue1.remove());
            }
        } else if (this.queue1.isEmpty() && !this.queue2.isEmpty()) {
            this.queue1.insert(x);
            while (!this.queue2.isEmpty()) {
                this.queue1.insert(this.queue2.remove());
            }
        } else {
            this.queue1.insert(x);
        }
    }

    pop(): number {
        if (this.queue1.isEmpty() && !this.queue2.isEmpty()) {
            return this.queue2.remove();
        } else {
            return this.queue1.remove();
        }
    }

    top(): number {
        if (this.queue1.isEmpty() && !this.queue2.isEmpty()) {
            return this.queue2.peek();
        } else {
            return this.queue1.peek();
        }
    }

    empty(): boolean {
        return this.queue1.isEmpty() && this.queue2.isEmpty();
    }
}

class MyQueue<T> {
    private readonly queArray: T[];
    private front: number;
    private rear: number;
    private nItems: number;

    constructor() {
        this.queArray = [];
        this.front = 0;
        this.rear = -1;
        this.nItems = 0;
    }

    insert(x: T): void {
        if (this.rear === -1) {
            this.rear = -1;
        }
        this.queArray[++this.rear] = x;
        this.nItems++;
    }

    remove(): T {
        this.nItems--;
        return this.queArray[this.front++];
    }

    peek(): T {
        return this.queArray[this.front];
    }

    isEmpty(): boolean {
        return this.nItems === 0;
    }

    size(): number {
        return this.nItems;
    }
}
